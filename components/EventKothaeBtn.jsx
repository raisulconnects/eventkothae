// components/EventKothaeBtn.jsx
export default function EventKothaeBtn({
  children,
  className = "",
  onClick,
  type = "button",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        relative inline-flex items-center justify-center
        px-6 py-2.5 rounded-xl
        bg-linear-to-r from-indigo-600 via-purple-600 to-fuchsia-600
        text-white font-medium tracking-wide
        shadow-lg shadow-purple-900/30
        hover:scale-[1.03] hover:shadow-purple-900/50
        active:scale-[0.98]
        transition-all duration-300 ease-out
        focus:outline-none focus:ring-2 focus:ring-purple-500/50
        ${className}
      `}
    >
      {children}
    </button>
  );
}
