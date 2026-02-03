// components/EventKothaeBtn2.jsx
export default function EventKothaeBtn2({
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
        bg-transparent border-2 border-purple-500
        text-purple-400 font-medium tracking-wide
        hover:bg-purple-500/20 hover:text-white
        active:scale-[0.97]
        transition-all duration-300 ease-out
        focus:outline-none focus:ring-2 focus:ring-purple-500/40
        ${className}
      `}
    >
      {children}
    </button>
  );
}
