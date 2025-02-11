import WestparkMap from '@/components/shared/interactive-map'
import { Section } from '@/components/shared/section'

export default function MapSection() {
	return (
		<Section
			id='map'
			className='gap-12 flex flex-col'
			align='center'
			subtitle="We're close to all of the main transport hubs."
			description="If you would like visit our storage units, don't hesitate to give us a call and we'll be happy to show you our facilities."
		>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-8 w-full'>
				<div className='col-span-1'>
					<WestparkMap />
				</div>

				<div className='col-span-1 space-y-8 pl-0 md:pl-24'>
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
						<h3 className='font-medium mb-2'>Contact</h3>
						<p>
							Stan
							<br />
							0274 977407
							<br />
							westparkstorageunits@gmail.com
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
