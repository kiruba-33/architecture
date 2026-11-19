import { Link } from 'react-router-dom'

/**
 * Reusable Button component.
 * Supports button element, React Router Link (via `to`), or external link (via `href`).
 */
export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  disabled = false,
  onClick,
  icon: Icon,
  iconPosition = 'right',
  ...rest
}) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none rounded'

  const sizeStyles = {
    sm: 'text-xs uppercase tracking-wider px-3.5 py-2 gap-1.5',
    md: 'text-sm font-semibold tracking-wide px-5 py-2.5 gap-2',
    lg: 'text-base font-semibold tracking-wide px-7 py-3.5 gap-2.5',
  }

  const variantStyles = {
    primary:
      'bg-burgundy text-white hover:bg-burgundy-hover shadow-sm focus-visible:ring-burgundy active:translate-y-px',
    corporate:
      'bg-burgundy text-white hover:bg-burgundy-hover shadow-sm focus-visible:ring-burgundy active:translate-y-px',
    secondary:
      'bg-transparent border-2 border-burgundy text-burgundy hover:bg-burgundy hover:text-white focus-visible:ring-burgundy active:translate-y-px',
    dark:
      'bg-charcoal text-white hover:bg-burgundy shadow-sm focus-visible:ring-charcoal active:translate-y-px',
    outline:
      'border-2 border-burgundy text-burgundy hover:bg-burgundy hover:text-white focus-visible:ring-burgundy',
    'outline-green':
      'border-2 border-burgundy text-burgundy hover:bg-burgundy hover:text-white focus-visible:ring-burgundy',
    'outline-white':
      'border-2 border-white/85 text-white hover:bg-white hover:text-charcoal focus-visible:ring-white',
    white:
      'bg-white text-charcoal hover:bg-ivory shadow-sm focus-visible:ring-silver active:translate-y-px',
    text:
      'bg-transparent text-burgundy hover:text-wine underline underline-offset-4 focus-visible:ring-burgundy',
  }

  const classes = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${
    variantStyles[variant] || variantStyles.primary
  } ${className}`

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="text-current text-base shrink-0" aria-hidden="true" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="text-current text-base shrink-0" aria-hidden="true" />}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    )
  }

  return (
    <button type={type} disabled={disabled} onClick={onClick} className={classes} {...rest}>
      {content}
    </button>
  )
}
