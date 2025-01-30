import { Section } from '@/components/shared/section'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

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
		area: '14m2',
		dimensions: '4m x 3.5m',
		recommendations: ['Boxes', 'Small Items']
	},
	{
		size: 'Medium',
		price: '$400',
		area: '21m2',
		dimensions: '6m x 3.5m',
		recommendations: ['Furniture', 'Materials', 'Bikes', 'Scooters']
	},
	{
		size: 'Large',
		price: '$500',
		area: '26m2',
		dimensions: '7.5m x 3.5m',
		recommendations: ['Caravans', 'Cars', 'Trailers']
	},
	{
		size: 'Extra Large',
		price: '$500',
		area: '28m2',
		dimensions: '8m x 3.5m',
		recommendations: ['Boats']
	}
]

export default function PricingSection() {
	return (
		<Section id='pricing-table' align='center' subtitle='At Westpark we have 4 different size storage units.'>
			<div className='flex flex-col gap-12'>
				<h3 className="text-gray-500 font-sans max-w-prose">
					If you have any questions about our prices, give us a call and we can help talk you through the
					options.
				</h3>
				<div className='mb-20 rounded-xl border'>
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>Size</TableHead>
								<TableHead>Price (GST inclusive)</TableHead>
								<TableHead>Area</TableHead>
								<TableHead>Dimensions</TableHead>
								<TableHead>Recommendations</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{storageUnits.map((unit) => (
								<TableRow key={unit.size}>
									<TableCell className='font-medium'>{unit.size}</TableCell>
									<TableCell>{unit.price}</TableCell>
									<TableCell>{unit.area}</TableCell>
									<TableCell>{unit.dimensions}</TableCell>
									<TableCell>{unit.recommendations.join(', ')}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</div>
			</div>
		</Section>
	)
}
