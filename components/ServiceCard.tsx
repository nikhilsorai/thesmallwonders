import Link from "next/link";
import { ArrowRight, Clock, Users, CheckCircle } from "lucide-react";

export interface ServiceCardProps {
  id: string;
  name: string;
  category: string;
  promise: string;
  whoFor: string;
  delivered: string[];
  engagementLength: string;
  cta: string;
  featured?: boolean;
}

export default function ServiceCard({
  id,
  name,
  promise,
  whoFor,
  delivered,
  engagementLength,
  cta,
}: ServiceCardProps) {
  return (
    <article
      id={`service-${id}`}
      className="card-base p-7 md:p-8 flex flex-col gap-5 bg-white group"
      aria-label={`Service: ${name}`}
    >
      {/* Name */}
      <div>
        <h3 className="font-serif text-xl font-semibold text-[#2A2A28] leading-tight mb-2">
          {name}
        </h3>
        {/* Promise */}
        <p className="font-sans text-base text-[#B5654A] font-medium leading-snug">
          {promise}
        </p>
      </div>

      {/* Who it's for */}
      <div className="flex items-start gap-2.5">
        <Users size={15} className="shrink-0 text-[#7A8B6F] mt-0.5" />
        <p className="font-sans text-sm text-[rgba(42,42,40,0.65)] leading-relaxed">
          <span className="font-medium text-[rgba(42,42,40,0.8)]">For: </span>
          {whoFor}
        </p>
      </div>

      {/* Deliverables */}
      <div>
        <p className="text-xs font-semibold tracking-[0.08em] uppercase text-[rgba(42,42,40,0.4)] mb-3 font-sans">
          What&apos;s delivered
        </p>
        <ul className="space-y-2" role="list">
          {delivered.map((item, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <CheckCircle
                size={14}
                className="shrink-0 text-[#7A8B6F] mt-0.5"
              />
              <span className="font-sans text-sm text-[rgba(42,42,40,0.7)] leading-relaxed">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer — engagement length + CTA */}
      <div className="mt-auto pt-5 border-t border-[rgba(42,42,40,0.07)] flex items-center justify-between gap-4">
        <div className="flex items-center gap-1.5 text-xs text-[rgba(42,42,40,0.4)] font-sans">
          <Clock size={12} />
          {engagementLength}
        </div>
        <Link
          href={`/contact?service=${encodeURIComponent(name)}`}
          id={`service-cta-${id}`}
          className="inline-flex items-center gap-1.5 text-sm font-sans font-medium text-[#B5654A] hover:text-[#8F4D38] transition-colors group/cta"
          aria-label={`${cta} about ${name}`}
        >
          {cta}
          <ArrowRight
            size={14}
            className="group-hover/cta:translate-x-1 transition-transform"
          />
        </Link>
      </div>
    </article>
  );
}
