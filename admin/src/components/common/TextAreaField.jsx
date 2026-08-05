const TextAreaField = ({
  label,
  rows = 5,
  placeholder,
  register,
  name,
  error,
}) => {
  return (
    <div>

      <label className="mb-2 block text-sm font-medium text-slate-300">
        {label}
      </label>

      <textarea
        rows={rows}
        placeholder={placeholder}
        {...register(name)}
        className={`
          w-full
          rounded-2xl
          border
          bg-[#08111F]
          px-5
          py-4
          text-white
          outline-none
          transition-all
          duration-300
          ${
            error
              ? "border-red-500"
              : "border-white/10 focus:border-sky-500"
          }
        `}
      />

      {error && (
        <p className="mt-2 text-sm text-red-400">
          {error.message}
        </p>
      )}

    </div>
  );
};

export default TextAreaField;