export default function Button({ children, variant = 'primary', className = '' }) {
  const baseStyle = "px-6 py-2.5 font-bold transition-all duration-300 rounded shadow-sm";
  
  const variants = {
    primary: "bg-red-600 text-white hover:bg-red-700 hover:shadow-md",
    secondary: "bg-blue-900 text-white hover:bg-blue-800",
    outline: "border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
}