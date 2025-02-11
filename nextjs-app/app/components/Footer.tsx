import { Icons } from '@/components/shared/icons'

export default function Footer() {
	const currentYear = new Date().getFullYear()

	return (
		<footer className='bg-brand-800 text-white py-16'>
			<div className='container mx-auto px-4'>
				{/* Top Phone Number */}
				<div className='flex items-center mb-20'>
					<h3 className='text-4xl font-medium'>
						<span className='md:inline'>Call us on </span>
						<span className='block md:inline'>0274 977407</span>
					</h3>
				</div>

				{/* Bottom Grid */}
				<div className='grid grid-cols-1 lg:grid-cols-12 gap-4 items-end'>
					{/* Logo Column */}
					<div className='flex flex-col items-start gap-4 lg:col-span-5'>
						<div className='items-center flex flex-col flex-nowrap gap-4'>
							<Icons.logo className='h-8 w-auto stroke-white' /><h2 className='text-white font-medium font-slab text-3xl whitespace-nowrap'>Westpark Self Storage</h2>
						</div>
						<p className='text-sm'>© {currentYear} Westpark Self Storage</p>
					</div>

					{/* Contact Column */}
					<div className='lg:col-start-6 lg:col-span-3'>
						<h3 className='font-medium mb-4'>Contact</h3>
						<p className=''>Stan</p>
						<p className=''>0274 977407</p>
						<p>westparkstorageunits@gmail.com</p>
					</div>

					{/* Address Column */}
					<div className='lg:col-start-10 lg:col-span-3'>
						<h3 className='font-medium mb-4'>Address</h3>
						<p>Westpark Self Storage</p>
						<p>31 Connaught Drive, Hornby,</p>
						<p>Christchurch 8042</p>
					</div>
				</div>
			</div>
		</footer>
	)
}
