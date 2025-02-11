import { Section } from '@/components/shared/section'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

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
		<Section
			id='pricing-table'
			align='center'
			subtitle='If you have any questions about what sized unit best suits your needs, give us a call and we can help talk you through the options.'
		>
			<div className='flex flex-col gap-12'>
				<div className='mb-36 rounded-xl border'>
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
