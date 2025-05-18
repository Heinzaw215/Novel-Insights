'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { z } from 'zod'

// Schema
const contactFormSchema = z.object({
  username: z.string()
    .min(5, "Username must be at least 5 characters")
    .max(20, "Username must be at most 20 characters"),
  age: z.coerce.number({
    required_error: "Age is required",
    invalid_type_error: "Age must be a number",
  })
    .min(1, "Age must be at least 1")
    .max(120, "Age must be realistic"),
  subject: z.string().min(1, "Subject is required").max(100, "Subject is too long"),
  message: z.string().max(500, "Message should not be too long"),
})

type ContactForm = z.infer<typeof contactFormSchema>

const ContactFormLight = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<ContactForm>({
    resolver: zodResolver(contactFormSchema)
  })

  const onSubmit = (data: ContactForm) => {
    toast.success('Form submitted successfully!')
    console.log(data)
  }

  return (
    <div className="max-w-2xl mx-auto p-10 bg-white/70 backdrop-blur-md border border-amber-100 rounded-[2rem] shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
      <h2 className="text-3xl font-serif text-brown-800 mb-8 text-center tracking-tight">
        We’d Love to Hear from You
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Username */}
        <div className="relative group">
          <input
            {...register('username')}
            id="username"
            type="text"
            placeholder=" "
            className="peer w-full px-4 pt-5 pb-2 bg-amber-50/60 text-brown-800 rounded-xl border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-600"
          />
          <label
            htmlFor="username"
            className="absolute left-4 top-2 text-sm text-brown-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-brown-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-amber-700 font-serif"
          >
            Username
          </label>
          {errors.username && <p className="text-sm text-red-600 mt-1">{errors.username.message}</p>}
        </div>

        {/* Age */}
        <div className="relative group">
          <input
            {...register('age')}
            id="age"
            type="number"
            placeholder=" "
            className="peer w-full px-4 pt-5 pb-2 bg-amber-50/60 text-brown-800 rounded-xl border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-600"
          />
          <label
            htmlFor="age"
            className="absolute left-4 top-2 text-sm text-brown-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-brown-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-amber-700 font-serif"
          >
            Age
          </label>
          {errors.age && <p className="text-sm text-red-600 mt-1">{errors.age.message}</p>}
        </div>

        {/* Subject */}
        <div className="col-span-1 md:col-span-2 relative group">
          <input
            {...register('subject')}
            id="subject"
            type="text"
            placeholder=" "
            className="peer w-full px-4 pt-5 pb-2 bg-amber-50/60 text-brown-800 rounded-xl border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-600"
          />
          <label
            htmlFor="subject"
            className="absolute left-4 top-2 text-sm text-brown-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-brown-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-amber-700 font-serif"
          >
            Subject
          </label>
          {errors.subject && <p className="text-sm text-red-600 mt-1">{errors.subject.message}</p>}
        </div>

        {/* Message */}
        <div className="col-span-1 md:col-span-2 relative group">
          <textarea
            {...register('message')}
            id="message"
            rows={5}
            placeholder=" "
            className="peer w-full px-4 pt-6 pb-2 bg-amber-50/60 text-brown-800 rounded-xl border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-600 resize-none"
          />
          <label
            htmlFor="message"
            className="absolute left-4 top-2 text-sm text-brown-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-brown-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-amber-700 font-serif"
          >
            Message
          </label>
          {errors.message && <p className="text-sm text-red-600 mt-1">{errors.message.message}</p>}
        </div>

        {/* Submit */}
        <div className="col-span-1 md:col-span-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 px-6 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-xl shadow-md transition tracking-wide"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default ContactFormLight
