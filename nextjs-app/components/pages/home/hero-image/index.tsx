import hero from '@/components/pages/home/_assets/westpark-hero-units-centered.jpg'
import { Section } from '@/components/shared/section'
import Image from 'next/image'

export default function HeroImage() {
	return (
		<Section id='hero-image'>
			<div className='h-screen w-full'>
				<Image
					src={hero}
					alt='Westpark Self Storage'
					sizes='100vw'
					priority
					className='object-cover rounded-sm h-full w-full'
				/>
			</div>
		</Section>
	)
}
