import React from 'react'
import ContactUs from '../_components/contact-us'
import Footer from '../_components/Footer'

export default function ContactUsPage() {
  return (
    <div>
        <ContactUs/>
        <Footer quote={`"the goal of early childhood education should be to activate the child's own natural desire to learn" ` } quoteAuthor={`“Maria Montessori”`}/>
    </div>
  )
}
