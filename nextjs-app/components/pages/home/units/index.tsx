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
		suitableFor: 'boxes, small items',
		price: '$300pm (GST inclusive)'
	},
	{
		size: 'Medium',
		area: 21,
		dimensions: '6m x 3.5m',
		suitableFor: 'materials, motorbike',
		price: '$400pm (GST inclusive)'
	},
	{
		size: 'Large',
		area: 26,
		dimensions: '7.5m x 3.5m',
		suitableFor: 'car, three bedroom house',
		price: '$500pm (GST inclusive)'
	},
	{
		size: 'Extra-Large',
		area: 28,
		dimensions: '7.5m x 3.5m',
		suitableFor: 'camper van, caravan, boat',
		price: '$500pm (GST inclusive)'
	}
]

export default function Units() {
	return (
		<Section
			id='facility-image'
			align='center'
			subtitle="From the contents of an office to a collectible car or the family caravan, we'll keep it safe and dry for you."
		>
			<div className='pb-20 grid grid-cols-2 lg:grid-cols-4 gap-2'>
				{units.map((unit) => (
					<UnitCard key={unit.size} {...unit} />
				))}
			</div>
		</Section>
	)
}

function UnitCard({ size, area, dimensions, suitableFor, price }: UnitCardProps) {
	return (
		<Card className='bg-brand-800 text-white h-full min-h-[420px] w-auto flex flex-col justify-between'>
			<CardHeader className='pb-2'>
				<Warehouse className='w-8 h-8 mb-2' />
				<h3 className='text-3xl font-light'>{size}</h3>
			</CardHeader>
			<CardContent className='flex flex-col gap-4'>
				<p className='text-2xl font-light'>Area: {area}m²</p>
				<div className='flex flex-col gap-1'>
					<p className='text-sm'>{dimensions}</p>
					<p className='text-sm'>Suitable for: {suitableFor}</p>
					<p className='text-sm'>{price}</p>
				</div>
			</CardContent>
		</Card>
	)
}
