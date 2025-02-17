import { contactFormSchema } from '@/components/pages/contact/contact-form-schema'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
	const body = await request.json()
	const res = contactFormSchema.safeParse(body)

	if (!res.success) {
		const { errors } = res.error
		console.log({ errors })
		return NextResponse.json({ error: `${errors}. Please try again!` })
	}

	const { name, email, message } = res.data

	if (!name || !email || !message) return NextResponse.json({ error: 'Invalid data. Please try again!' })

	try {
		const response = await fetch('https://api.useplunk.com/v1/send', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${process.env.PLUNK_API_KEY}`
			},
			body: JSON.stringify({
				to: process.env.EMAIL_NOTIFICATION_ADDRESS,
				subject: `New Contact Form Submission from ${name}`,
				body: `
					Name: ${name}
					Email: ${email}
					Message: ${message}
				`
			})
		})

		if (!response.ok) {
			throw new Error('Failed to send email')
		}
	} catch (err) {
		console.error(err)
		return NextResponse.json({ message: `Could not submit message.`, err })
	}

	return NextResponse.json({ message: 'Message submitted.', res })
}
