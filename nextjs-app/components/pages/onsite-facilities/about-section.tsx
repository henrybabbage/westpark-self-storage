
import { FeatureToggle } from '@/components/shared/feature-toggle'
import { Section } from '@/components/shared/section'

export default function AboutSection() {
	return (
		<Section
			id='about'
			subtitle='Westpark Self Storage has been providing the community with reliable storage for over a decade.'
			className='gap-8 flex flex-col'
		>
			<FeatureToggle />
		</Section>
	)
}
