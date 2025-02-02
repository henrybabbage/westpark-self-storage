import map from '@/components/pages/contact/_assets/google-map-westpark-static.webp'
import { ResponsiveImage } from '@/components/shared/responsive-image'
import { Section } from '@/components/shared/section'
import WestparkMap from '@/components/shared/interactive-map'

export default function MapSection() {
	return (
		<Section id='map' className='gap-12 flex flex-col'>
			<div className='gap-4 flex flex-col'>
				<h2 className='text-5xl font-bold'>{"We're close to all of the main transport hubs."}</h2>
				<p className='text-xl'>
					{
						"If you would like visit our storage units, don't hesitate to give us a call and we'll be happy to show you our facilities."
					}
				</p>
			</div>

			<div className='flex flex-col md:flex-row gap-8'>
				<WestparkMap />

				<div className='space-y-8 flex-1'>
					<div>
						<h3 className='font-medium mb-2'>Address</h3>
						<p>
							Westpark Self Storage
							<br />
							31 Connaught Drive, Hornby,
							<br />
							Christchurch 8042
						</p>
					</div>

					<div>
						<p className='mb-2'>Stan McFerrier</p>
						<p>
							T. 0274 977407
							<br />
							E. westparkstorageunits@gmail.com
						</p>
					</div>

					<div>
						<h3 className='font-medium mb-2'>Opening hours</h3>
						<p>
							Monday – Sunday
							<br />
							24 hours
						</p>
					</div>
				</div>
			</div>
		</Section>
	)
}
