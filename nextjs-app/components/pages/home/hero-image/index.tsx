import hero from '@/components/pages/home/_assets/westpark-hero-symmetrical.jpg'
import { ResponsiveImage } from '@/components/shared/responsive-image'
import { Section } from '@/components/shared/section'

export default function HeroImage() {
	return (
		<Section id='hero-image'>
			<ResponsiveImage src={hero} alt='Westpark Self Storage' className='mb-20' />
		</Section>
	)
}
