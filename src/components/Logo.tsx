type LogoProps = {
  variant?: 'dark' | 'light';
  className?: string;
};

/**
 * Small Wonders lockup, built in the same shape as the Invena logo it replaces:
 * a round mark, the name, and a one-line descriptor underneath.
 */
export default function Logo({ variant = 'dark', className = '' }: LogoProps) {
  return (
    <span className={`sw-logo sw-logo--${variant} ${className}`.trim()}>
      <span className="sw-logo__mark" aria-hidden="true">
        <svg viewBox="0 0 24 24" focusable="false">
          <path d="M12 1.5c.7 5.6 2.9 9.4 10.5 10.5C14.9 13.1 12.7 16.9 12 22.5 11.3 16.9 9.1 13.1 1.5 12 9.1 10.9 11.3 7.1 12 1.5Z" />
        </svg>
      </span>
      <span className="sw-logo__text">
        <span className="sw-logo__name">Small Wonders</span>
        <span className="sw-logo__tag">OKR &amp; AI Advisory</span>
      </span>
    </span>
  );
}
