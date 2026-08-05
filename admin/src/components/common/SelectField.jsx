const SelectField = ({
  label,
  options,
  register,
  name,
  error,
}) => {
  return (
    <div>

      <label className="mb-2 block text-sm font-medium text-slate-300">
        {label}
      </label>

      <select
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
          ${
            error
              ? "border-red-500"
              : "border-white/10 focus:border-sky-500"
          }
        `}
      >

        <option value="">
          Select
        </option>

        {options.map((option) => (
          <option
            key={option}
            value={option}
          >
            {option}
          </option>
        ))}

      </select>

      {error && (
        <p className="mt-2 text-sm text-red-400">
          {error.message}
        </p>
      )}

    </div>
  );
};

export default SelectField;