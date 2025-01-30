import { Icons } from '@/components/shared/icons'

export default function Footer() {
	const currentYear = new Date().getFullYear()

	return (
		<footer className='bg-brand-800 text-white py-16'>
			<div className='container mx-auto px-4'>
				{/* Top Phone Number */}
				<div className='flex items-center gap-2 mb-20'>
					<span className='text-4xl font-light'>✆</span>
					<span className='text-4xl font-light'>0274 977407</span>
				</div>

				{/* Bottom Grid */}
				<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
					{/* Logo Column */}
					<div className='flex flex-col items-start gap-4'>
						<div className='items-center flex flex-col gap-4'>
							<Icons.logo className='h-8 w-auto stroke-white' />
							<h2 className='text-white text-3xl'>Westpark Self Storage</h2>
						</div>
						<p className='text-sm'>© {currentYear} Westpark Self Storage</p>
					</div>

					{/* Contact Column */}
					<div>
						<h3 className='font-normal mb-4'>Contact</h3>
						<p className='mb-4'>Stan McFerrier</p>
						<p className='mb-2'>T. 0274 977407</p>
						<p>E. westparkstorageunits@gmail.com</p>
					</div>

					{/* Address Column */}
					<div>
						<h3 className='font-normal mb-4'>Address</h3>
						<p>Westpark Self Storage</p>
						<p>31 Connaught Drive, Hornby,</p>
						<p>Christchurch 8042</p>
					</div>
				</div>
			</div>
		</footer>
	)
}
