import { FooterNewsletter } from '@/components/Footer'
import { newsletterConfig } from '@/config/footerConfig'
import React from 'react'

const ContactPage = () => {
  return (
    <div>ContactPage
      <FooterNewsletter
        heading={newsletterConfig.heading}
        description={newsletterConfig.description}
        placeholder={newsletterConfig.placeholder}
        buttonLabel={newsletterConfig.buttonLabel}
      />
    </div>
  )
}

export default ContactPage