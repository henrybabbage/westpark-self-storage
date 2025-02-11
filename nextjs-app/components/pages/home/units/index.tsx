import { Section } from '@/components/shared/section'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Warehouse } from 'lucide-react'

type UnitCardProps = {
	size: string
	area: number
	dimensions: string
	suitableFor: string
	price: string
}

const units = [
	{
		size: 'Small',
		area: 14,
		dimensions: '4m x 3.5m',
		suitableFor: 'Contents of 1–2 bedroom flat (dresser, table, chairs, sofa, bed), approx. 250 cartons.',
		price: '$300pm (GST inclusive)'
	},
	{
		size: 'Medium',
		area: 21,
		dimensions: '6m x 3.5m',
		suitableFor: 'Contents of 2 bedrooms, small office, trade tools and equipment.',
		price: '$400pm (GST inclusive)'
	},
	{
		size: 'Large',
		area: 26,
		dimensions: '7.5m x 3.5m',
		suitableFor: 'Car or boat, contents of 3 bedroom house, commercial inventory, trade tools and equipment.',
		price: '$500pm (GST inclusive)'
	},
	{
		size: 'Extra-Large',
		area: 28,
		dimensions: '8m x 3.5m',
		suitableFor:
			'Caravan, campervan, small truck, contents of 4 bedroom house, office furniture, trade and commercial inventory.',
		price: '$500pm (GST inclusive)'
	}
]

export default function Units() {
	return (
		<Section
			id='units'
			align='center'
			subtitle='We offer 4 different sized storage units. Each unit has a door height of 2.5m.'
		>
			<div className='pb-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2'>
				{units.map((unit) => (
					<UnitCard key={unit.size} {...unit} />
				))}
			</div>
		</Section>
	)
}

function UnitCard({ size, area, dimensions, suitableFor, price }: UnitCardProps) {
	return (
		<Card className='bg-brand-800 text-white h-full min-h-[340px] lg:min-h-[420px] w-auto flex flex-col justify-between'>
			<CardHeader className='pb-2'>
				<Warehouse className='w-8 h-8 mb-2' />
				<h3 className='text-3xl font-light'>{size}</h3>
			</CardHeader>
			<CardContent className='flex flex-col gap-4'>
				<p className='text-2xl font-light'>Floor area: {area}m²</p>
				<div className='flex flex-col gap-1'>
					<p className='text-sm'>{dimensions}</p>
					<p className='text-sm'>Suitable for: {suitableFor}</p>
					<p className='text-sm'>{price}</p>
				</div>
			</CardContent>
		</Card>
	)
}
