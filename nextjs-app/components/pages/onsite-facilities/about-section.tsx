import FeaturesSlideshow from '@/components/shared/features-slideshow'
import { Section } from '@/components/shared/section'

export default function AboutSection() {
	return (
		<Section
			id='about'
			subtitle='Westpark has been providing Christchurch with reliable storage for over a decade.'
			className='gap-8 flex flex-col'
		>
			<FeaturesSlideshow />
		</Section>
	)
}
