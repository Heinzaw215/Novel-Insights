'use client';

import { Suspense, lazy, useState, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import toast from 'react-hot-toast';
import { useTheme } from '@/components/ThemeProvider';
// import LoginInput from '@/components/LoginInput';

const SubmitButton = lazy(() => import('@/components/Login/SubmitButton'))

const FaEye = lazy(() => import('react-icons/fa').then(mod => ({ default: mod.FaEye })))
const FaEyeSlash = lazy(() => import('react-icons/fa').then(mod => ({ default: mod.FaEyeSlash })))
const FaMoon = lazy(() => import('react-icons/fa').then(mod => ({ default: mod.FaMoon })))
const FaSun = lazy(() => import('react-icons/fa').then(mod => ({ default: mod.FaSun })))

// Schema
const loginSchema = z.object({
  username: z.string()
    .min(5, "UserName must be higher than 5 characters")
    .max(20, "UserName must be lower than 20 characters"),
  age: z.coerce.number({
    required_error: "Age is required",
    invalid_type_error: "Age must be a number",
  })
    .min(1, "Age must be at least 1")
    .max(120, "Age must be realistic"),
  email: z.string().email("Enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  remember: z.boolean().optional(),
});

type LoginFormInputs = z.infer<typeof loginSchema>;

// Password Strength Helper
const getPasswordStrength = (password: string) => {
  if (!password) return { label: '', color: '', value: 0 };

  let score = 0;
  if (password.length >= 6) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[a-z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  if (score <= 2) return { label: 'Weak', color: 'bg-red-500', value: 33 };
  if (score === 3 || score === 4) return { label: 'Medium', color: 'bg-yellow-500', value: 66 };
  return { label: 'Strong', color: 'bg-green-500', value: 100 };
};

export default function LoginForm() {
  const { theme, toggleTheme } = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');

  const strength = useMemo(() => getPasswordStrength(passwordInput), [passwordInput]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  });

  const togglePasswordVisibility = () => setShowPassword(prev => !prev);

  const onSubmit = async (data: LoginFormInputs) => {
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) throw new Error(result.message || 'Login failed');

      toast.success('Login successful', {
        style: {
          background: '#1e293b',
          color: '#fff',
          border: '1px solid #3b82f6',
        },
        iconTheme: {
          primary: '#3b82f6',
          secondary: '#fff',
        },
      });

      console.log('Login success:', result);
    } catch {
      toast.error('Invalid credentials', {
        style: {
          background: '#fee2e2',
          color: '#b91c1c',
          border: '1px solid #fca5a5',
        },
        icon: '❌',
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto space-y-4 p-6 border rounded-lg shadow-md bg-white dark:bg-slate-800 text-gray-900 dark:text-white"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 role='heading' className="text-2xl font-semibold">Login to Book Reviews</h2>
        <button
          type="button"
          onClick={toggleTheme}
          className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          <Suspense fallback={<span />}>
            {theme === 'light' ? <FaMoon size={18} /> : <FaSun size={18} />}
          </Suspense>
        </button>
      </div>

      {/* <LoginInput /> */}

      {/* Age */}
      <div>
        <label htmlFor="age" className="block mb-1 font-medium text-gray-900 dark:text-gray-100">
          Age:
        </label>
        <input
          id="age"
          type="text"
          {...register("age")}
          className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-3 py-2 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age.message}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block mb-1 font-medium text-gray-900 dark:text-gray-100">
          Email
        </label>
        <input
          id="email"
          type="email"
          {...register('email')}
          placeholder="you@example.com"
          className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-3 py-2 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
      </div>

      {/* Password */}
      <div className="relative">
        <label htmlFor="password" className="block mb-1 font-medium text-gray-900 dark:text-gray-100">
          Password
        </label>
        <input
          id="password"
          type={showPassword ? 'text' : 'password'}
          {...register('password')}
          value={passwordInput}
          onChange={(e) => setPasswordInput(e.target.value)}
          className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-3 py-2 rounded pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute inset-y-0 right-3 flex items-center bg-transparent px-2 text-gray-500 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          aria-label={showPassword ? 'Hide password' : 'Show password'}
        >
          <Suspense fallback={<span />}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </Suspense>
        </button>
        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}

        {/* Strength Meter */}
        {passwordInput && strength && (
          <div className="mt-2">
            <div className="h-2 w-full rounded bg-gray-200 dark:bg-gray-600">
              <div
                className={`h-2 rounded ${strength.color} transition-all duration-300`}
                style={{ width: `${strength.value}%` }}
              />
            </div>
            <p className={`text-sm mt-1 ${strength.color.replace('bg-', 'text-')}`} aria-live="polite">
              Strength: {strength.label}
            </p>
          </div>
        )}
      </div>

      {/* Remember me & forgot password */}
      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
          <input type="checkbox" {...register('remember')} className="accent-blue-600" />
          Remember me
        </label>
        <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
          Forgot password?
        </a>
      </div>

      {/* Submit */}
      <Suspense fallback={<div>Loading button...</div>}>
        <SubmitButton isSubmitting={isSubmitting} />
      </Suspense>
    </form>
  );
}
