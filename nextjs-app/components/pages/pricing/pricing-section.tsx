import { Section } from '@/components/shared/section'
import TableWithVerticalLines from '@/components/shared/table-with-vertical-lines'
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '@/components/ui/table'

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

export default function PricingSection() {
	return (
		<Section
			id='pricing-table'
            align='center'
            subtitle='We offer four different sized units.'
			description='If you have any questions about what sized unit best suits your needs, give us a call and we can help talk you through the options.'
		>
			<div className='flex flex-col gap-12 pt-12 mb-36'>
				<div className='overflow-hidden rounded-none border border-primary max-w-5xl mx-auto w-full'>
					<TableWithVerticalLines data={storageUnits} />
				</div>
			</div>
		</Section>
	)
}
