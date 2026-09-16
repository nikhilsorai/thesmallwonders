type LogoProps = {
  /** 'light' places the logo on a white plate, for dark surfaces like the footer. */
  variant?: 'dark' | 'light';
  className?: string;
};

/** The official Small Wonders logo. Sizing is by height only, so it never distorts. */
export default function Logo({ variant = 'dark', className = '' }: LogoProps) {
  return (
    <span className={`sw-logo sw-logo--${variant} ${className}`.trim()}>
      <img src="/assets/images/logo/small-wonders.png" alt="Small Wonders" />
    </span>
  );
}
