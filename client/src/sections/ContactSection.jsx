import { useState } from 'react'
import { sendContactMessage } from '../api/portfolioApi'
import SectionHeading from '../components/common/SectionHeading'

const initialFormState = {
  name: '',
  email: '',
  message: '',
}

const ContactSection = ({ contact }) => {
  const [formData, setFormData] = useState(initialFormState)
  const [statusText, setStatusText] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((previous) => ({ ...previous, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      setIsSubmitting(true)
      const response = await sendContactMessage(formData)
      setStatusText(response.message)
      setFormData(initialFormState)
    } catch {
      setStatusText('Unable to send your message right now. Please try later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="panel-section contact-grid">
      <div>
        <SectionHeading
          eyebrow="COMMUNICATION"
          title="Let&apos;s Connect"
          description="Have a project in mind or want to collaborate? Send a message."
        />
        <ul className="contact-list">
          <li>
            <strong>Email:</strong> {contact.email}
          </li>
          <li>
            <strong>Phone:</strong> {contact.phone}
          </li>
          <li>
            <strong>Location:</strong> {contact.location}
          </li>
        </ul>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Your Name
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Your Email
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Your Message
          <textarea
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
        {statusText ? <p className="status-text">{statusText}</p> : null}
      </form>
    </section>
  )
}

export default ContactSection
