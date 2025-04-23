import { FooterAbout, FooterNewsletter } from '@/components/Footer'
import { aboutText, newsletterConfig } from '@/config/footerConfig'
import React from 'react'

const ContactPage = () => {
  return (
    <div>
      <FooterAbout title="About Us" content={aboutText} />
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