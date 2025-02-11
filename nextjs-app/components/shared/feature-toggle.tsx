'use client'

import access from '@/components/pages/onsite-facilities/_assets/access.webp'
import interior from '@/components/pages/onsite-facilities/_assets/interior.jpg'
import storage from '@/components/pages/onsite-facilities/_assets/storage.jpg'
import units from '@/components/pages/onsite-facilities/_assets/units.jpg'
import { cn } from '@/utils/cn'
import Image from 'next/image'
import { useState } from 'react'

const FEATURES = [
	{
		id: 'item1',
		title: 'Purpose built',
		content:
			'Our storage facility comprises 51 purpose built tilt slab concrete units. Each storage unit also has its own power supply and lighting.',
		image: storage
	},
	{
		id: 'item2',
		title: 'Security',
		content:
			'The site is fully fenced for complete security. Each individual unit comes with 24 hour 7 day a week swipe card access.',
		image: units
	},
	{
		id: 'item3',
		title: 'Convenient access',
		content:
			'Access is easy with wide asphalt entries and turnaround areas between units, making it easier to back trailers around to unload.',
		image: interior
	},
	{
		id: 'item4',
		title: 'Communal facilities',
		content: 'Westpark Self Storage also provides a communal kitchen and toilet facility on site.',
		image: access
	}
]

export function FeatureToggle() {
	const [activeAccordionId, setActiveAccordionId] = useState<string>(FEATURES[0].id)

	return (
		<>
			<div className='mx-auto container'>
				<div className='flex flex-col lg:grid lg:grid-cols-2 pr-8'>
					<div className='p-0 sm:p-8 lg:py-16'>
						<div className='flex flex-col space-y-2'>
							{FEATURES.map((item) => (
								<button
									type='button'
									key={item.id}
									className={cn(
										'w-full rounded-lg p-3',
										activeAccordionId === item.id && 'bg-zinc-100 dark:bg-zinc-800'
									)}
									onClick={() => setActiveAccordionId(item.id)}
								>
									<h3 className='text-left text-lg text-zinc-950 dark:text-zinc-50'>{item.title}</h3>
									<p className='text-left text-zinc-500 dark:text-zinc-400'>{item.content}</p>
								</button>
							))}
						</div>
					</div>
					<div className='relative h-auto lg:block'>
						<Image
							src={FEATURES.find((item) => item.id === activeAccordionId)?.image!}
							alt='Accordion Image'
							sizes='50vw'
							className='aspect-[2/3] h-full w-full object-cover'
							key={activeAccordionId}
						/>
						<div className='absolute inset-0 bg-black opacity-20'></div>
					</div>
				</div>
			</div>
		</>
	)
}
