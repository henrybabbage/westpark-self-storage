import hero from '@/components/pages/home/_assets/westpark-hero-units-centered.jpg'
import Image from 'next/image'

export default function LandingSection() {
	return (
		<div className='py-12 max-w-full h-[120vh]'>
			<div className='flex flex-col gap-12 justify-start items-start h-full w-full'>
				<div className='flex flex-col gap-6'>
					<h1 className='text-[#000] whitespace-nowrap text-5xl sm:text-6xl md:text-7xl font-medium tracking-tighter text-left'>
						Keep it safe at
					</h1>
					<h1 className='text-brand-800 font-slab  text-5xl sm:text-6xl md:text-7xl font-normal tracking-tighter text-left'>
						Westpark
					</h1>
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
	)
}
