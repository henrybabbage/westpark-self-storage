import units from '@/components/pages/onsite-facilities/_assets/units.jpg'
import { ResponsiveImage } from '@/components/shared/responsive-image'
import { Section } from '@/components/shared/section'

export default function AboutSection() {
	return (
		<Section id='about' className='mt-20 gap-8 flex flex-col'>
			<div className='gap-4 flex flex-col'>
				<h2 className='text-4xl font-bold'>
					Westpark Self Storage has been providing the community with reliable storage for over a decade.
				</h2>

				<div className='space-y-4 text-lg'>
					<p>Our storage facility houses 51 purpose built tilt slab concrete units.</p>

					<p>
						The site is fully fenced for complete security. Each individual unit comes with 24 hour 7 day a
						week swipe card access. Each storage unit also has its own power supply and lighting.
					</p>

					<p>
						Access is easy with wide asphalt entries and turnaround areas between units, making it easier to
						back trailers around to unload. Westpark Self-Storage also provides a communal kitchen and
						toilet facility on site.
					</p>
				</div>
			</div>

			<div className='relative h-auto w-full'>
				<ResponsiveImage src={units} alt='Storage units at Westpark Self Storage' className='mb-20' />
			</div>
		</Section>
	)
}
