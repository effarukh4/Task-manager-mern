export default function Button({
  children,
  variant = "primary",
  type = "button",
  disabled = false,
  loading = false,
  onClick,
  fullWidth = false,
  className = "",
}) {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={`btn btn--${variant} ${fullWidth ? "btn--full" : ""} ${className}`}
    >
      {loading ? <span className="btn__spinner" aria-hidden="true" /> : null}
      <span>{loading ? "Working…" : children}</span>
    </button>
  );
}
