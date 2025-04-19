// components/Login/types.ts
import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email("Enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  remember: z.boolean().optional(),
});

export type LoginFormInputs = z.infer<typeof loginSchema>;