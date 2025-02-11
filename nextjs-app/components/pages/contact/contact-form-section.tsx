'use client'

import { Section } from '@/components/shared/section'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

const formSchema = z.object({
	name: z.string().min(1, 'Name is required'),
	email: z.string().email('Invalid email address'),
	message: z.string().min(1, 'Message is required')
})

export default function ContactFormSection() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			email: '',
			message: ''
		}
	})

	function onSubmit(values: z.infer<typeof formSchema>) {
		// Handle form submission
		console.log(values)
	}

	return (
		<Section id='form' className='relative' align='center' subtitle='Queries? Contact us here.'>
			<div className='flex flex-col lg:flex-row gap-8 lg:gap-16 w-full mt-20 lg:mt-0'>
				<div className='space-y-6 lg:w-1/3'>
					<p className='text-sm sm:text-base'>
						If you have any queries, please do not hesitate to call us on 0274 977407.
					</p>

					<p className='text-sm sm:text-base'>
						Alternatively, please complete the form on this page and we will get back to you promptly.
					</p>
				</div>

				<div className='lg:w-2/3'>
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
							<FormField
								control={form.control}
								name='name'
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<Input placeholder='Name:*' {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name='email'
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<Input placeholder='Email:*' {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name='message'
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<Textarea placeholder='Message:*' className='min-h-[200px]' {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<div className='flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4'>
								<Button
									type='submit'
									className='bg-brand-800 hover:bg-brand-900 text-white px-8 w-full sm:w-auto'
								>
									Send
								</Button>
								<span className='text-sm text-gray-500 text-left sm:text-right'>*Required Field</span>
							</div>
						</form>
					</Form>
				</div>
			</div>
		</Section>
	)
}
