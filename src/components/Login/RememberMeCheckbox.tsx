// components/Login/RememberMe.tsx
import { UseFormRegister } from 'react-hook-form';
import { LoginFormInputs } from './types';

interface RememberMeProps {
  register: UseFormRegister<LoginFormInputs>;
}

export default function RememberMe({ register }: RememberMeProps) {
  return (
    <div className="flex items-center justify-between">
      <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
        <input type="checkbox" {...register('remember')} className="accent-blue-600" />
        Remember me
      </label>
      <a href="#" className="text-sm text-blue-600 hover:underline">
        Forgot password?
      </a>
    </div>
  );
}