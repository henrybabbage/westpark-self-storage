import hero from '@/components/pages/home/_assets/westpark-hero-units-centered.jpg'
import { Section } from '@/components/shared/section'
import Image from 'next/image'

export default function HeroImage() {
	return (
		<Section id='hero-image'>
			<div className='pb-20 h-screen w-full relative rounded-md'>
				<Image
					src={hero}
					alt='Westpark Self Storage'
					sizes='100vw'
					priority
					className='object-cover rounded-md h-full w-full'
				/>
			</div>
		</Section>
	)
}
