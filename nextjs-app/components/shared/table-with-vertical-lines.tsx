import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

type StorageUnit = {
    id: string
	size: string
	price: string
	area: string
	dimensions: string
	recommendations: string[]
}

const storageUnits: StorageUnit[] = [
	{
		id: '1',
		size: 'Small',
		price: '$300',
		area: '14m²',
		dimensions: '4m x 3.5m',
		recommendations: ['Boxes', 'Small Items']
	},
    {
        id: '2',
		size: 'Medium',
		price: '$400',
		area: '21m²',
		dimensions: '6m x 3.5m',
		recommendations: ['Furniture', 'Materials', 'Bikes', 'Scooters']
	},
    {
        id: '3',
		size: 'Large',
		price: '$500',
		area: '26m²',
		dimensions: '7.5m x 3.5m',
		recommendations: ['Caravans', 'Cars', 'Trailers']
	},
	{
		id: '4',
		size: 'Extra Large',
		price: '$500',
		area: '28m²',
		dimensions: '8m x 3.5m',
		recommendations: ['Boats']
	}
]

export default function TableWithVerticalLines() {
	return (
		<div>
			<Table>
				<TableHeader className='bg-transparent'>
					<TableRow className='*:border-border hover:bg-transparent [&>:not(:last-child)]:border-r'>
						<TableHead className='text-base'>Size</TableHead>
						<TableHead className='text-base'>Price</TableHead>
						<TableHead className='text-base'>Area</TableHead>
						<TableHead className='text-base'>Dimensions</TableHead>
						<TableHead className='text-base'>Recommendations</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody className='[&_td:first-child]:rounded-l-lg [&_td:last-child]:rounded-r-lg'>
					{storageUnits.map((item) => (
						<TableRow
							key={item.id}
							className='*:border-border hover:bg-transparent [&>:not(:last-child)]:border-r'
						>
							<TableCell className='font-medium'>{item.size}</TableCell>
							<TableCell>{item.price}</TableCell>
							<TableCell>{item.area}</TableCell>
							<TableCell>{item.dimensions}</TableCell>
							<TableCell className='text-right'>{item.recommendations}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
			<p className='mt-4 text-center text-sm text-muted-foreground'>Reach out to us with any questions.</p>
		</div>
	)
}
