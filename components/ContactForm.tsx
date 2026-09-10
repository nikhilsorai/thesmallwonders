"use client";

import { useState, useId } from "react";
import Link from "next/link";
import { SITE, CTA } from "@/data/site-content";

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
  if (data.message.trim().length < 10)
    errors.message = "Please share a few details — minimum 10 characters.";
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
      // Simulated response delay
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setSubmitState("success");
    } catch {
      setSubmitState("error");
    }
  }

  if (submitState === "success") {
    return (
      <div className="bg-[#FAF7F2] rounded-3xl p-10 md:p-14 text-center border border-[rgba(36,35,32,0.1)]">
        <span className="text-3xl font-serif italic text-[#B4533C] block mb-4">
          Message received.
        </span>
        <p className="font-sans text-[#242320]/75 text-base max-w-md mx-auto leading-relaxed">
          Thank you for reaching out. Ekta will review your note and be in touch shortly — typically within two business days.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
      {/* Left — Contact Details & Context */}
      <div className="lg:col-span-5">
        <span className="section-label">Get in Touch</span>
        <h2 className="font-serif text-[clamp(2rem,3.8vw,2.75rem)] font-normal text-[#242320] mb-6 leading-tight">
          Let&apos;s start a conversation
        </h2>
        <p className="font-sans text-base text-[#242320]/70 leading-[1.8] mb-10">
          Whether you&apos;re preparing for a growth transition, tackling cultural friction, or exploring leadership alignment, drop us a line. We design from your context, not from a playbook.
        </p>

        <div className="space-y-6 pt-6 border-t border-[rgba(36,35,32,0.08)]">
          <div>
            <span className="text-[0.6875rem] font-medium tracking-[0.16em] uppercase text-[#242320]/45 block mb-1.5 font-sans">
              Direct Email
            </span>
            <a
              href={`mailto:${SITE.contact.email}`}
              className="font-serif text-lg text-[#242320] hover:text-[#B4533C] transition-colors"
            >
              {SITE.contact.email}
            </a>
          </div>

          <div>
            <span className="text-[0.6875rem] font-medium tracking-[0.16em] uppercase text-[#242320]/45 block mb-1.5 font-sans">
              Location &amp; Working Time
            </span>
            <p className="font-sans text-sm text-[#242320]/70">
              {SITE.contact.locationLine}
            </p>
          </div>

          <div>
            <span className="text-[0.6875rem] font-medium tracking-[0.16em] uppercase text-[#242320]/45 block mb-1.5 font-sans">
              Founder Profile
            </span>
            <a
              href={SITE.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="link-editorial text-sm font-sans"
            >
              <span>LinkedIn — Ekta Das</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        {/* Assessment callout */}
        <div className="mt-12 p-6 rounded-2xl bg-[#F3ECE3] border border-[rgba(36,35,32,0.08)]">
          <p className="font-serif text-base text-[#242320] mb-2 leading-snug">
            Not sure where to start?
          </p>
          <p className="font-sans text-xs text-[#242320]/65 leading-relaxed mb-4">
            The assessment takes 5 minutes and gives you a clear read on where your organisation needs an anchor.
          </p>
          <a
            href={CTA.assessment.href}
            target="_blank"
            rel="noopener noreferrer"
            id="contact-page-cta-assessment"
            className="link-editorial text-xs font-semibold uppercase tracking-wider"
          >
            <span>{CTA.assessment.label}</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      {/* Right — Form */}
      <div className="lg:col-span-7">
        <form
          onSubmit={handleSubmit}
          noValidate
          className="bg-[#FAF7F2] rounded-3xl p-8 sm:p-12 border border-[rgba(36,35,32,0.1)] space-y-6"
          aria-label="Contact form"
          id={`contact-form-${formId}`}
        >
          {/* Name row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor={`firstName-${formId}`}
                className="block text-xs font-medium uppercase tracking-wider text-[#242320]/70 mb-2 font-sans"
              >
                First name <span className="text-[#B4533C]">*</span>
              </label>
              <input
                id={`firstName-${formId}`}
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Priya"
                autoComplete="given-name"
                className="form-input"
                aria-invalid={!!errors.firstName}
              />
              {errors.firstName && (
                <span className="text-xs text-[#B4533C] mt-1.5 block font-sans">
                  {errors.firstName}
                </span>
              )}
            </div>

            <div>
              <label
                htmlFor={`lastName-${formId}`}
                className="block text-xs font-medium uppercase tracking-wider text-[#242320]/70 mb-2 font-sans"
              >
                Last name <span className="text-[#B4533C]">*</span>
              </label>
              <input
                id={`lastName-${formId}`}
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Sharma"
                autoComplete="family-name"
                className="form-input"
                aria-invalid={!!errors.lastName}
              />
              {errors.lastName && (
                <span className="text-xs text-[#B4533C] mt-1.5 block font-sans">
                  {errors.lastName}
                </span>
              )}
            </div>
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor={`email-${formId}`}
              className="block text-xs font-medium uppercase tracking-wider text-[#242320]/70 mb-2 font-sans"
            >
              Work Email <span className="text-[#B4533C]">*</span>
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
              className="form-input"
              aria-invalid={!!errors.email}
            />
            {errors.email && (
              <span className="text-xs text-[#B4533C] mt-1.5 block font-sans">
                {errors.email}
              </span>
            )}
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor={`phone-${formId}`}
              className="block text-xs font-medium uppercase tracking-wider text-[#242320]/70 mb-2 font-sans"
            >
              Phone <span className="text-[#242320]/35 font-normal">(optional)</span>
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
          <div>
            <label
              htmlFor={`message-${formId}`}
              className="block text-xs font-medium uppercase tracking-wider text-[#242320]/70 mb-2 font-sans"
            >
              Message <span className="text-[#B4533C]">*</span>
            </label>
            <textarea
              id={`message-${formId}`}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us a bit about your organisation and where you are feeling pressure or scaling friction..."
              rows={4}
              required
              className="form-input resize-none"
              aria-invalid={!!errors.message}
            />
            {errors.message && (
              <span className="text-xs text-[#B4533C] mt-1.5 block font-sans">
                {errors.message}
              </span>
            )}
          </div>

          {/* Error notice */}
          {submitState === "error" && (
            <div className="p-4 rounded-xl bg-[#B4533C]/10 border border-[#B4533C]/20 text-[#B4533C] text-sm">
              Something went wrong. Please try again or email us directly at {SITE.contact.email}.
            </div>
          )}

          {/* Submit button */}
          <div className="pt-2">
            <button
              type="submit"
              id="contact-form-submit"
              disabled={submitState === "submitting"}
              className="btn btn-primary w-full justify-center text-sm py-4 disabled:opacity-60"
            >
              {submitState === "submitting" ? "Sending message…" : "Send message →"}
            </button>
            <p className="text-xs text-center text-[#242320]/40 font-sans mt-3">
              We typically reply within 2 business days.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
