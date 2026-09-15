import Link from 'next/link';
import type { ReactNode } from 'react';

type NavAnchorProps = {
  href: string;
  className?: string;
  onClick?: () => void;
  children: ReactNode;
};

/** Client-side Link for internal routes; a plain anchor for mailto:, tel: and external URLs. */
export default function NavAnchor({ href, className, onClick, children }: NavAnchorProps) {
  if (href.startsWith('/')) {
    return (
      <Link href={href} className={className} onClick={onClick}>
        {children}
      </Link>
    );
  }
  const external = href.startsWith('http');
  return (
    <a
      href={href}
      className={className}
      onClick={onClick}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
    </a>
  );
}
