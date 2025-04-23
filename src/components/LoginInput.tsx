// "use client";

// import React from 'react'
// import { z } from 'zod';
// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';

// const loginSchema = z.object({
//   username: z.string()
//     .min(5, "UserName must be higher than 5 characters")
//     .max(20, "UserName must be lower than 20 characters"),
//   age: z.coerce.number({
//     required_error: "Age is required",
//     invalid_type_error: "Age must be a number",
//   })
//     .min(1, "Age must be at least 1")
//     .max(120, "Age must be realistic"),
//   email: z.string().email("Enter a valid email"),
//   password: z.string().min(6, "Password must be at least 6 characters"),
//   remember: z.boolean().optional(),
// });

// type LoginFormInputs = z.infer<typeof loginSchema>;

//   const {
//     register,
//   } = useForm<LoginFormInputs>({
//     resolver: zodResolver(loginSchema),
//   });

// const LoginInput = () => {
//   return (
//     <div className='grid grid-cols-2 '>
//         <label htmlFor="username" className='my-2'>Username:</label>
//         <input
//           id='username'
//           type="text"
//           {...register("username")}
//           className="inline w-full border border-gray-300 px-3 py-2 rounded mt-1" 
//         />
//         {errors.username && <p className="text-red-500 text-sm mt-1 col-span-2 text-[1rem]">{errors.username.message}</p>}
//       </div>
//   )
// }

// export default LoginInput