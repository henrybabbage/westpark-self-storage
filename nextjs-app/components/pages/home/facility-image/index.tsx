import facility from '@/components/pages/home/_assets/westpark-aerial.webp'
import { Section } from '@/components/shared/section'
import Image from 'next/image'

export default function FacilityImage() {
	return (
		<Section
			id='facility-image'
			align='center'
			subtitle="From the contents of an office to a collectible car or the family caravan, we'll keep it safe and dry for you."
		>
			<div className='mb-20 relative w-full aspect-square md:aspect-[16/9] rounded-md'>
				<Image
					src={facility}
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
