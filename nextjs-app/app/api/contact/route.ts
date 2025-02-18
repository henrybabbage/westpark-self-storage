import { contactFormSchema } from '@/components/pages/contact/contact-form-schema'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
	try {
		const body = await request.json()
		console.log('Received request body:', body) // Debug log
		const res = contactFormSchema.safeParse(body)

		if (!res.success) {
			const { errors } = res.error
			console.error('Validation errors:', errors)
			return NextResponse.json({ error: `${errors}. Please try again!` }, { status: 400 })
		}

		const { name, email, message } = res.data
		console.log('Sending email for:', { name, email }) // Debug log

		if (!name || !email || !message) return NextResponse.json({ error: 'Invalid data. Please try again!' })

		const response = await fetch('https://api.useplunk.com/v1/send', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${process.env.PLUNK_SECRET_API_KEY}`
			},
			body: JSON.stringify({
				to: process.env.EMAIL_NOTIFICATION_ADDRESS,
				subject: `New contact form submission from ${name}`,
				body: `
					Name: ${name}
					Email: ${email}
					Message: ${message}
				`
			})
		})

		if (!response.ok) {
			console.error('Plunk API error:', await response.text())
			throw new Error('Failed to send email')
		}

		return NextResponse.json({ message: 'Message submitted.' }, { status: 200 })
	} catch (err) {
		console.error('Server error:', err)
		return NextResponse.json(
			{ error: 'Could not submit message.', details: err instanceof Error ? err.message : String(err) },
			{ status: 500 }
		)
	}
}
