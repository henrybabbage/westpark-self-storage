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
		<Section id='form' className='relative'>
			<div className='space-y-6 lg:max-w-2xl w-full px-0 mt-20 lg:mt-0'>
				<div className='space-y-2'>
					<h1 className='text-3xl sm:text-4xl font-bold'>Queries?</h1>
					<h2 className='text-3xl sm:text-4xl font-bold'>Contact us here.</h2>
				</div>

				<p className='text-sm sm:text-base'>
					If you would like to discuss the price of a unit, please do not hesitate to call Stan McFerrier on
					0274 977407.
				</p>

				<p className='text-sm sm:text-base'>
					Alternatively, please complete the form on this page and Stan will get back to you promptly on a
					price for your requested unit and whether it is available.
				</p>

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
								className='bg-red-800 hover:bg-red-900 text-white px-8 w-full sm:w-auto'
							>
								Send
							</Button>
							<span className='text-sm text-gray-500 text-center sm:text-right'>*Required Field</span>
						</div>
					</form>
				</Form>
			</div>
		</Section>
	)
}
