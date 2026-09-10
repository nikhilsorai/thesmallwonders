import Link from "next/link";

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
  index?: number;
}

export default function ServiceCard({
  id,
  name,
  promise,
  whoFor,
  delivered,
  engagementLength,
  cta,
  index,
}: ServiceCardProps) {
  const indexStr = index !== undefined ? String(index + 1).padStart(2, "0") : undefined;

  return (
    <article
      id={`service-${id}`}
      className="py-8 md:py-10 border-t border-[rgba(36,35,32,0.12)] flex flex-col justify-between group transition-colors"
      aria-label={`Service: ${name}`}
    >
      <div>
        {/* Header with index */}
        <div className="flex items-baseline justify-between gap-4 mb-3">
          <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#242320] leading-snug group-hover:text-[#C46243] transition-colors">
            {name}
          </h3>
          {indexStr && (
            <span className="font-mono text-xs text-[#242320]/35 font-medium shrink-0">
              {indexStr}
            </span>
          )}
        </div>

        {/* Promise */}
        <p className="font-serif text-base italic text-[#C46243] leading-snug mb-5">
          {promise}
        </p>

        {/* Who it's for */}
        <p className="font-sans text-sm text-[#242320]/70 leading-relaxed mb-6">
          <span className="font-medium text-[#242320]/90">Designed for: </span>
          {whoFor}
        </p>

        {/* Deliverables */}
        <div className="mb-6">
          <p className="text-[0.6875rem] font-semibold tracking-[0.14em] uppercase text-[#242320]/45 mb-3 font-sans">
            Key Deliverables
          </p>
          <ul className="space-y-2" role="list">
            {delivered.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 font-sans text-sm text-[#242320]/75 leading-relaxed">
                <span className="text-[#C46243] text-sm leading-none mt-1 select-none">·</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-5 border-t border-[rgba(36,35,32,0.06)] flex items-center justify-between gap-4 text-xs font-sans">
        <span className="text-[#242320]/50 italic font-serif">
          {engagementLength}
        </span>
        <Link
          href={`/contact?service=${encodeURIComponent(name)}`}
          id={`service-cta-${id}`}
          className="link-editorial text-sm font-medium"
          aria-label={`${cta} about ${name}`}
        >
          <span>{cta}</span>
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
