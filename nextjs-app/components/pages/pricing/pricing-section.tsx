import { Section } from '@/components/shared/section'
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '@/components/ui/table'

type StorageUnit = {
	size: string
	price: string
	area: string
	dimensions: string
	recommendations: string[]
}

const storageUnits: StorageUnit[] = [
	{
		size: 'Small',
		price: '$300',
		area: '14m²',
		dimensions: '4m x 3.5m',
		recommendations: ['Boxes', 'Small Items']
	},
	{
		size: 'Medium',
		price: '$400',
		area: '21m²',
		dimensions: '6m x 3.5m',
		recommendations: ['Furniture', 'Materials', 'Bikes', 'Scooters']
	},
	{
		size: 'Large',
		price: '$500',
		area: '26m²',
		dimensions: '7.5m x 3.5m',
		recommendations: ['Caravans', 'Cars', 'Trailers']
	},
	{
		size: 'Extra Large',
		price: '$500',
		area: '28m²',
		dimensions: '8m x 3.5m',
		recommendations: ['Boats']
	}
]

export default function PricingSection() {
	return (
		<Section id='pricing-table' align='center'>
			<div className='flex flex-col gap-12 pt-12'>
				<div className='rounded-xl border max-w-5xl mx-auto w-full'>
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead className='text-base'>Size</TableHead>
								<TableHead className='text-base'>Price</TableHead>
								<TableHead className='text-base'>Area</TableHead>
								<TableHead className='text-base'>Dimensions</TableHead>
								<TableHead className='text-base'>Recommendations</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{storageUnits.map((unit) => (
								<TableRow key={unit.size} className='h-28'>
									<TableCell className='font-medium text-lg'>{unit.size}</TableCell>
									<TableCell className='text-base'>{unit.price}</TableCell>
									<TableCell className='text-base'>{unit.area}</TableCell>
									<TableCell className='text-base'>{unit.dimensions}</TableCell>
									<TableCell className='text-base'>{unit.recommendations.join(', ')}</TableCell>
								</TableRow>
							))}
						</TableBody>
						<TableFooter>
							<TableRow>
								<TableCell colSpan={5} className='text-base font-normal'>
									Prices are GST inclusive.
								</TableCell>
							</TableRow>
						</TableFooter>
					</Table>
				</div>
				<div className='max-w-7xl mb-36 mx-auto'>
					<h3 className='text-center mx-0 mb-8 max-w-full text-3xl text-balance font-medium sm:max-w-full sm:text-4xl md:text-5xl lg:text-5xl leading-[1.2] lg:leading-[1.3] tracking-tight text-foreground'>
						If you have any questions about what sized unit best suits your needs, give us a call and we can
						help talk you through the options.
					</h3>
				</div>
			</div>
		</Section>
	)
}
