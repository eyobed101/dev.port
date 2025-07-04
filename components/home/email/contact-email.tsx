import * as React from 'react'

interface ContactEmailProps {
  name: string
  email: string
  subject: string
  message: string
}

export function ContactEmail({ name, email, subject, message }: ContactEmailProps) {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: 1.6 }}>
      <h1 style={{ fontSize: '24px', color: '#2563eb' }}>New Contact Form Submission</h1>
      <div style={{ marginTop: '20px' }}>
        <p><strong>From:</strong> {name} &lt;{email}&gt;</p>
        <p><strong>Subject:</strong> {subject}</p>
      </div>
      <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#f3f4f6', borderRadius: '5px' }}>
        <p style={{ whiteSpace: 'pre-wrap' }}>{message}</p>
      </div>
      <div style={{ marginTop: '30px', fontSize: '14px', color: '#6b7280' }}>
        <p>This email was sent via your portfolio contact form.</p>
      </div>
    </div>
  )
}