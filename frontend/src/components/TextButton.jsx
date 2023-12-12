export default function TextButton({ onClick, children, textModifier }) {
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer mt-4 sm:mt-0 ${textModifier}`}
    >
      {children}
    </button>
  );
}
