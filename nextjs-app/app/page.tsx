import hero from '@/components/pages/home/_assets/westpark-hero-units-centered.jpg'
import Image from 'next/image'

export default async function Page() {
	return (
		<>
			<div className='container relative'>
				<div className='py-12 max-w-full h-[120vh]'>
					<div className='flex flex-col gap-12 justify-start items-start h-full w-full'>
						<div className='text-5xl sm:text-6xl md:text-7xl font-medium tracking-tighter flex flex-col items-start text-left'>
							<h1 className='text-[#000] whitespace-nowrap'>Keep it safe at </h1>
							<h1 className='text-brand-800 font-normal font-slab'>Westpark</h1>
						</div>
						<div className='relative flex-1 w-full min-h-0'>
							<Image
								src={hero}
								alt='Westpark Self Storage'
								fill
								sizes='100vw'
								priority
								className='object-cover rounded-sm'
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
