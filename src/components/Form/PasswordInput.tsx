import { useState } from "react";
import { FaEye, FaEyeSlash, FaLock } from "react-icons/fa";

import { ChangeEvent } from "react";

export default function PasswordInput({
  id = "password",
  name = "password",
  label = "Password",
  placeholder = "Enter your password",
  required = false,
  onChange,
}: {
  id?: string;
  name?: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  return (
    <div className="w-full">
      <label
        htmlFor={id}
        className="block mb-1 text-sm font-medium text-gray-700"
      >
        {label}
      </label>

      <div className="relative">
        {/* Left lock icon */}
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
          <FaLock />
        </div>

        {/* Input field */}
        <input
          type={showPassword ? "text" : "password"}
          id={id}
          name={name}
          required={required}
          placeholder={placeholder}
          onChange={onChange}
          aria-label={label}
          className="w-full border border-gray-300 rounded-full pl-10 pr-12 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Eye toggle button */}
        <button
          type="button"
          onClick={togglePasswordVisibility}
          aria-label={showPassword ? "Hide password" : "Show password"}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-blue-600 focus:outline-none"
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>
    </div>
  );
}
