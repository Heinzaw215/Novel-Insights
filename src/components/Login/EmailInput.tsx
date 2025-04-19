// components/Login/EmailInput.tsx
import { UseFormRegister } from 'react-hook-form';
import { LoginFormInputs } from './types';

interface EmailInputProps {
  register: UseFormRegister<LoginFormInputs>;
  error?: string;
}

export default function EmailInput({ register, error }: EmailInputProps) {
  return (
    <div>
      <label htmlFor="email" className="block mb-1 font-medium">Email</label>
      <input
        id="email"
        type="email"
        {...register('email')}
        className="w-full border border-gray-300 px-3 py-2 rounded mt-1"
        placeholder="you@example.com"
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
