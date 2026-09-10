"use client";

import { useState, useId } from "react";
import { ArrowRight, Mail, MapPin, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import Link from "next/link";
import { SITE, CTA } from "@/data/site-content";

// Inline LinkedIn SVG — lucide-react does not export Linkedin in the installed version
function LinkedInIcon({ size = 15, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  service?: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  message?: string;
}

type SubmitState = "idle" | "submitting" | "success" | "error";

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.firstName.trim()) errors.firstName = "First name is required.";
  if (!data.lastName.trim()) errors.lastName = "Last name is required.";
  if (!data.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!data.message.trim()) errors.message = "Message is required.";
  if (data.message.trim().length < 10) errors.message = "Please say a little more — minimum 10 characters.";
  return errors;
}

interface ContactFormProps {
  prefillService?: string;
}

export default function ContactForm({ prefillService }: ContactFormProps) {
  const formId = useId();
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    service: prefillService ?? "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitState, setSubmitState] = useState<SubmitState>("idle");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newErrors = validate(formData);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSubmitState("submitting");

    try {
      // TODO: Replace this placeholder with your preferred form provider.
      // Option A — Formspree: POST to https://formspree.io/f/YOUR_FORM_ID
      //   const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", { method: "POST", body: JSON.stringify(formData), headers: { "Content-Type": "application/json", Accept: "application/json" } });
      //
      // Option B — Web3Forms: POST to https://api.web3forms.com/submit
      //   Include access_key in body: { ...formData, access_key: "YOUR_WEB3FORMS_KEY" }
      //
      // Option C — Resend: create an /api/contact route handler and call it here.

      // Simulated delay for demo — remove this block when wiring a real provider
      await new Promise((resolve) => setTimeout(resolve, 1500));
      // In production this line should check res.ok and throw if !res.ok
      setSubmitState("success");
    } catch {
      setSubmitState("error");
    }
  }

  if (submitState === "success") {
    return (
      <div className="bg-white rounded-2xl p-10 text-center border border-[rgba(42,42,40,0.08)] shadow-soft">
        <CheckCircle size={40} className="text-[#7A8B6F] mx-auto mb-4" />
        <h3 className="font-serif text-2xl text-[#2A2A28] mb-2">Message received.</h3>
        <p className="font-sans text-[rgba(42,42,40,0.65)] text-base max-w-sm mx-auto">
          Thank you for reaching out. Ekta will be in touch shortly — usually within 2 business days.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-start">

      {/* Left — contact info */}
      <div className="lg:col-span-2">
        <span className="section-label">Get in touch</span>
        <h2 className="font-serif text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold text-[#2A2A28] mb-4 leading-tight">
          Ready to build clarity, rhythm, and culture?
        </h2>
        <p className="font-sans text-base text-[rgba(42,42,40,0.65)] leading-relaxed mb-8">
          Drop us a line. We&apos;ll craft something that works for your context — not from a playbook, but from your North Star.
        </p>

        <div className="space-y-4">
          <a
            href={`mailto:${SITE.contact.email}`}
            className="flex items-center gap-3 text-sm font-sans text-[rgba(42,42,40,0.7)] hover:text-[#B5654A] transition-colors group"
          >
            <div className="w-9 h-9 rounded-full bg-[rgba(181,101,74,0.1)] flex items-center justify-center shrink-0">
              <Mail size={15} className="text-[#B5654A]" />
            </div>
            {SITE.contact.email}
          </a>

          <div className="flex items-start gap-3 text-sm font-sans text-[rgba(42,42,40,0.6)]">
            <div className="w-9 h-9 rounded-full bg-[rgba(122,139,111,0.1)] flex items-center justify-center shrink-0 mt-0.5">
              <MapPin size={15} className="text-[#7A8B6F]" />
            </div>
            <span className="leading-relaxed">{SITE.contact.locationLine}</span>
          </div>

          <a
            href={SITE.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-sm font-sans text-[rgba(42,42,40,0.7)] hover:text-[#B5654A] transition-colors group"
          >
            <div className="w-9 h-9 rounded-full bg-[rgba(42,42,40,0.06)] flex items-center justify-center shrink-0">
              <LinkedInIcon size={15} className="text-[rgba(42,42,40,0.5)]" />
            </div>
            LinkedIn — Ekta Das
          </a>
        </div>

        {/* Alternative CTA */}
        <div className="mt-10 p-5 rounded-2xl bg-[#F5F0E8] border border-[rgba(42,42,40,0.08)]">
          <p className="font-sans text-sm text-[rgba(42,42,40,0.65)] mb-3 leading-relaxed">
            Not ready to talk yet? The assessment takes 5 minutes and gives you a clear read on where to start.
          </p>
          <a
            href={CTA.assessment.href}
            target="_blank"
            rel="noopener noreferrer"
            id="contact-page-cta-assessment"
            className="inline-flex items-center gap-1.5 text-sm font-sans font-medium text-[#B5654A] hover:text-[#8F4D38] transition-colors"
          >
            {CTA.assessment.label}
            <ArrowRight size={14} />
          </a>
        </div>
      </div>

      {/* Right — form */}
      <div className="lg:col-span-3">
        <form
          onSubmit={handleSubmit}
          noValidate
          className="bg-white rounded-2xl p-7 md:p-9 border border-[rgba(42,42,40,0.08)] shadow-soft space-y-5"
          aria-label="Contact form"
          id={`contact-form-${formId}`}
        >
          {/* Name row */}
          <div className="grid grid-cols-2 gap-4">
            <div className="form-field">
              <label
                htmlFor={`firstName-${formId}`}
                className="form-label"
              >
                First name
              </label>
              <input
                id={`firstName-${formId}`}
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Priya"
                autoComplete="given-name"
                className={`form-input ${errors.firstName ? "error" : ""}`}
                aria-describedby={errors.firstName ? `firstName-error-${formId}` : undefined}
                aria-invalid={!!errors.firstName}
              />
              {errors.firstName && (
                <span id={`firstName-error-${formId}`} className="form-error" role="alert">
                  {errors.firstName}
                </span>
              )}
            </div>
            <div className="form-field">
              <label
                htmlFor={`lastName-${formId}`}
                className="form-label"
              >
                Last name
              </label>
              <input
                id={`lastName-${formId}`}
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Sharma"
                autoComplete="family-name"
                className={`form-input ${errors.lastName ? "error" : ""}`}
                aria-describedby={errors.lastName ? `lastName-error-${formId}` : undefined}
                aria-invalid={!!errors.lastName}
              />
              {errors.lastName && (
                <span id={`lastName-error-${formId}`} className="form-error" role="alert">
                  {errors.lastName}
                </span>
              )}
            </div>
          </div>

          {/* Email */}
          <div className="form-field">
            <label htmlFor={`email-${formId}`} className="form-label">
              Email <span className="text-[#B5654A]" aria-label="required">*</span>
            </label>
            <input
              id={`email-${formId}`}
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="priya@company.com"
              autoComplete="email"
              required
              className={`form-input ${errors.email ? "error" : ""}`}
              aria-describedby={errors.email ? `email-error-${formId}` : undefined}
              aria-invalid={!!errors.email}
            />
            {errors.email && (
              <span id={`email-error-${formId}`} className="form-error" role="alert">
                {errors.email}
              </span>
            )}
          </div>

          {/* Phone */}
          <div className="form-field">
            <label htmlFor={`phone-${formId}`} className="form-label">
              Phone <span className="text-[rgba(42,42,40,0.35)] font-normal text-xs">(optional)</span>
            </label>
            <input
              id={`phone-${formId}`}
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              autoComplete="tel"
              className="form-input"
            />
          </div>

          {/* Message */}
          <div className="form-field">
            <label htmlFor={`message-${formId}`} className="form-label">
              Message <span className="text-[#B5654A]" aria-label="required">*</span>
            </label>
            <textarea
              id={`message-${formId}`}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us a bit about your organisation and what you're hoping to work on..."
              rows={5}
              required
              className={`form-input resize-none ${errors.message ? "error" : ""}`}
              aria-describedby={errors.message ? `message-error-${formId}` : undefined}
              aria-invalid={!!errors.message}
            />
            {errors.message && (
              <span id={`message-error-${formId}`} className="form-error" role="alert">
                {errors.message}
              </span>
            )}
          </div>

          {/* Error alert */}
          {submitState === "error" && (
            <div className="flex items-center gap-2.5 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm" role="alert">
              <AlertCircle size={16} className="shrink-0" />
              <span>Something went wrong. Please try again or email us directly at {SITE.contact.email}.</span>
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            id="contact-form-submit"
            disabled={submitState === "submitting"}
            className="btn btn-primary w-full justify-center text-base py-3.5 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {submitState === "submitting" ? (
              <>
                <Loader2 size={17} className="animate-spin" />
                Sending…
              </>
            ) : (
              <>
                Send message
                <ArrowRight size={17} />
              </>
            )}
          </button>

          <p className="text-xs text-center text-[rgba(42,42,40,0.35)] font-sans">
            We typically reply within 2 business days.
          </p>
        </form>
      </div>
    </div>
  );
}
