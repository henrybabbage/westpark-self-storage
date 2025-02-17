'use client'

import RequiredInput from '@/components/shared/required-input'
import RequiredTextArea from '@/components/shared/required-text-area'
import { Section } from '@/components/shared/section'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { contactFormSchema, type ContactFormValues } from './contact-form-schema'

export default function ContactForm() {
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [submitError, setSubmitError] = useState<string | null>(null)

	const form = useForm<ContactFormValues>({
		resolver: zodResolver(contactFormSchema),
		defaultValues: {
			name: '',
			email: '',
			message: ''
		}
	})

	async function onSubmit(values: ContactFormValues) {
		setIsSubmitting(true)
		setSubmitError(null)

		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(values)
			})

			const data = await response.json()

			if (!response.ok) {
				throw new Error(data.error || 'Failed to send message')
			}

			form.reset()
			// Optional: Add success toast/message here
		} catch (error) {
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
					<p className='text-sm sm:text-base'>
						If you have any queries, please do not hesitate to call us on 0274 977407.
					</p>

					<p className='text-sm sm:text-base'>
						Alternatively, please complete the form on this page and we will get back to you promptly.
					</p>
				</div>

				{/* Form */}
				<div>
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
											<RequiredTextArea label='Message' className='min-h-[200px]' {...field} />
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
									className='bg-brand-800 hover:bg-brand-900 text-white px-8 w-full sm:w-auto'
								>
									{isSubmitting ? 'Sending...' : 'Send'}
								</Button>
							</div>
						</form>
					</Form>
				</div>
			</div>
		</Section>
	)
}
