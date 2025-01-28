import facility from '@/components/pages/home/_assets/westpark-aerial.webp'
import { Section } from '@/components/shared/section'
import Image from 'next/image'

export default function FacilityImage() {
	return (
		<Section
            id='facility-image'
            align="center"
			subtitle='From the contents of an office to a collectible car or the family caravan, we’ll keep it safe and dry for you.'
		>
			<div className='pb-20 h-screen w-full relative rounded-md'>
				<Image
					src={facility}
					alt='Westpark Self Storage'
					sizes='100vw'
					priority
					className='object-cover rounded-md h-full w-full'
				/>
			</div>
		</Section>
	)
}
