import hero from '@/components/pages/home/_assets/westpark-hero-units-centered.jpg'
// import hero from '@/components/pages/home/_assets/westpark-hero-illustration.jpg'
import { Section } from '@/components/shared/section'
import Image from 'next/image'

export default function HeroImage() {
	return (
		<Section id='hero-image'>
			<div className='mb-20 relative w-full aspect-square md:aspect-[16/9] rounded-md'>
				<Image
					src={hero}
					alt='Westpark Self Storage'
					sizes='100vw'
					priority
					fill
					className='object-cover rounded-md'
				/>
			</div>
		</Section>
	)
}
