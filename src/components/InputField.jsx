const InputField = ({ label, placeholder, value, type = "text", onChange, error,}) => {
  return (
    <div className="flex flex-col w-full">
      <label className="text-base mb-2 font-normal">{label}</label>

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`px-3 py-2 bg-white rounded-lg border outline-none 
          ${error ? "border-red-400" : "border-[#C8C8C8]"}`}
      />

      {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
    </div>
  );
};
export default InputField;