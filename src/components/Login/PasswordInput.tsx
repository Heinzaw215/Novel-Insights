// components/Login/PasswordInput.tsx
import { UseFormRegister } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { LoginFormInputs } from './types';

interface PasswordInputProps {
  register: UseFormRegister<LoginFormInputs>;
  error?: string;
  showPassword: boolean;
  togglePasswordVisibility: () => void;
}

export default function PasswordInput({ register, error, showPassword, togglePasswordVisibility }: PasswordInputProps) {
  return (
    <div className="relative">
      <label htmlFor="password" className="block mb-1 font-medium">Password</label>
      <input
        id="password"
        type={showPassword ? 'text' : 'password'}
        {...register('password')}
        className="w-full border border-gray-300 px-3 py-2 rounded pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="••••••••"
      />
      <button
        type="button"
        onClick={togglePasswordVisibility}
        className="absolute inset-y-0 top-6 -right-2 flex items-center text-gray-500 hover:text-blue-600"
        aria-label={showPassword ? 'Hide password' : 'Show password'}
      >
        {showPassword ? <FaEyeSlash /> : <FaEye />}
      </button>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
