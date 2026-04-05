'use client'

import RequiredInput from '@/components/shared/required-input'
import RequiredTextArea from '@/components/shared/required-text-area'
import { Section } from '@/components/shared/section'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { contactFormSchema, type ContactFormValues } from './contact-form-schema'
import { ReCaptchaProvider, useReCaptcha } from 'next-recaptcha-v3'

export default function ContactForm() {
    const { loaded, error, executeRecaptcha } = useReCaptcha()
	const [recaptchaToken, setRecaptchaToken] = useState<string>()
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [submitError, setSubmitError] = useState<string | null>(null)
	const [isSuccess, setIsSuccess] = useState(false)

	const form = useForm<ContactFormValues>({
		resolver: zodResolver(contactFormSchema),
		defaultValues: {
			name: '',
			email: '',
			message: ''
		}
	})

    useEffect(() => {
		console.log('loaded', loaded)
		console.log('error', error)

		const generateToken = async () => {
			try {
				const newToken = await executeRecaptcha('contact')
				console.log('newToken', newToken)
				setRecaptchaToken(newToken)
			} catch (error) {
				console.error('Recaptcha error:', error)
			}
		}
		if (loaded) generateToken()
	}, [loaded, executeRecaptcha, error])

	async function onSubmit(values: ContactFormValues) {
		setIsSubmitting(true)
		setSubmitError(null)
		setIsSuccess(false)

		try {
			console.log('Submitting form:', values) // Debug log
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(values)
			})

			const data = await response.json()
			console.log('Response:', data) // Debug log

			if (!response.ok) {
				throw new Error(data.error || data.details || 'Failed to send message')
			}

			form.reset()
			setIsSuccess(true)
		} catch (error) {
			console.error('Form submission error:', error)
			setSubmitError(error instanceof Error ? error.message : 'Failed to send message')
		} finally {
			setIsSubmitting(false)
		}
	}

	return (
		<Section id='form' className='relative' align='center' subtitle='Queries? Contact us here.'>
			<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 w-full mt-20 lg:mt-0'>
				{/* Text */}
				<div className='space-y-6'>
					<p className='text-base sm:text-base'>
						If you have any queries, please do not hesitate to call us on 027 8042 000.
					</p>

					<p className='text-base sm:text-base'>
						Alternatively, please complete the form on this page and we will get back to you promptly.
					</p>
				</div>

				{/* Form */}
				<div>
					<ReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}>
						<Form {...form}>
							<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
								<FormField
									control={form.control}
									name='name'
									render={({ field }) => (
										<FormItem>
											<FormControl>
												<RequiredInput label='Name' {...field} />
											</FormControl>
											<div className='h-5'>
												<FormMessage />
											</div>
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name='email'
									render={({ field }) => (
										<FormItem>
											<FormControl>
												<RequiredInput label='Email' type='email' {...field} />
											</FormControl>
											<div className='h-5'>
												<FormMessage />
											</div>
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name='message'
									render={({ field }) => (
										<FormItem>
											<FormControl>
												<RequiredTextArea
													label='Message'
													className='min-h-[200px]'
													{...field}
												/>
											</FormControl>
											<div className='h-5'>
												<FormMessage />
											</div>
										</FormItem>
									)}
								/>

								<div className='flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4'>
									{submitError && <p className='text-destructive text-sm'>{submitError}</p>}
									<Button
										variant='brand'
										type='submit'
										disabled={isSubmitting}
										className='bg-brand-800 hover:bg-brand-900 text-white px-12 w-full sm:w-auto'
									>
										{isSubmitting ? 'Sending...' : 'Send'}
									</Button>
								</div>
								<div className='h-6'>
									{isSuccess && (
										<p className='text-primary text-sm font-normal'>Thank you. Message sent.</p>
									)}
								</div>
							</form>
						</Form>
					</ReCaptchaProvider>
				</div>
			</div>
		</Section>
	)
}
