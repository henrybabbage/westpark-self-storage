import facility from '@/components/pages/home/_assets/westpark-aerial.webp'
import { ResponsiveImage } from '@/components/shared/responsive-image'
import { Section } from '@/components/shared/section'

export default function FacilityImage() {
	return (
		<Section
			id='facility-image'
			align='center'
			subtitle='From the contents of an office to a collectible car or the family caravan, we can offer the perfect storage solution for your needs.'
		>
			<ResponsiveImage src={facility} alt='Westpark Self Storage' className='mb-20' />
		</Section>
	)
}
