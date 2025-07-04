'use server'

import { Resend } from 'resend'
import { ContactEmail } from '../email/contact-email'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(data: {
  name: string
  email: string
  subject: string
  message: string
}) {
  try {
    await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: [process.env.CONTACT_EMAIL!],
      subject: `New Contact: ${data.subject}`,
      react: ContactEmail(data),
    })

    return { success: true }
  } catch (error) {
    console.error('Error sending email:', error)
    throw error
  }
}