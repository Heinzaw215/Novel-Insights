'use client';

import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const contactFormSchema = z.object({
  username: z.string().min(5).max(20),
  age: z.coerce.number().min(1).max(120),
  subject: z.string().min(1).max(100),
  message: z.string().max(500),
})

type ContactForm = z.infer<typeof contactFormSchema>

const ContactFormDark = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = (data: ContactForm) => {
    console.log(data)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-xl mx-auto p-6 rounded-2xl shadow-lg bg-[#1F1A17] text-[#F3EDE4] space-y-6 border border-[#3C322C]"
    >
      <h2 role='heading' className="text-2xl font-bold text-[#D3A762]">📬 Contact Us</h2>

      <div>
        <label className="block text-sm mb-1" htmlFor="username">
          Username
        </label>
        <input
          {...register('username')}
          id="username"
          className="w-full p-3 rounded-md bg-[#2A2421] border border-[#3C322C] placeholder-[#B49C89] text-[#F3EDE4]"
          placeholder="Enter your username"
        />
        {errors.username && <p className="text-red-400 text-sm mt-1">{errors.username.message}</p>}
      </div>

      <div>
        <label className="block text-sm mb-1" htmlFor="age">
          Age
        </label>
        <input
          {...register('age')}
          type="number"
          id="age"
          className="w-full p-3 rounded-md bg-[#2A2421] border border-[#3C322C] placeholder-[#B49C89] text-[#F3EDE4]"
          placeholder="Your age"
        />
        {errors.age && <p className="text-red-400 text-sm mt-1">{errors.age.message}</p>}
      </div>

      <div>
        <label className="block text-sm mb-1" htmlFor="subject">
          Subject
        </label>
        <input
          {...register('subject')}
          id="subject"
          className="w-full p-3 rounded-md bg-[#2A2421] border border-[#3C322C] placeholder-[#B49C89] text-[#F3EDE4]"
          placeholder="Subject of your message"
        />
        {errors.subject && <p className="text-red-400 text-sm mt-1">{errors.subject.message}</p>}
      </div>

      <div>
        <label className="block text-sm mb-1" htmlFor="message">
          Message
        </label>
        <textarea
          {...register('message')}
          id="message"
          rows={4}
          className="w-full p-3 rounded-md bg-[#2A2421] border border-[#3C322C] placeholder-[#B49C89] text-[#F3EDE4]"
          placeholder="Your message..."
        />
        {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-[#D3A762] hover:bg-[#c39855] text-[#1F1A17] px-6 py-2 rounded-full font-semibold transition duration-300"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}

export default ContactFormDark
