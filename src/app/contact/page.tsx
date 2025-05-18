import ContactFormLight from '@/components/ContactForm/ContactFormLight'
import ContactFormDark from '@/components/ContactForm/ContactFormDark'
import { FooterAbout, FooterNewsletter } from '@/components/Footer'
import { aboutText, newsletterConfig } from '@/config/footerConfig'
import React from 'react'

const ContactPage = () => {
  return (
    <div>
      <FooterAbout title="About Us" content={aboutText} />
      <ContactFormLight />
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