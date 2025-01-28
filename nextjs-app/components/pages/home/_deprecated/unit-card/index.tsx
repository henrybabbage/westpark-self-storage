import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Warehouse } from 'lucide-react'

type UnitCardProps = {
	size: string
	area: number
	dimensions: string
	suitableFor: string
	price: string
}

export function UnitCard({ size, area, dimensions, suitableFor, price }: UnitCardProps) {
	return (
		<Card className='bg-brand-800 text-white h-12 w-auto border-none aspect-[4/5]'>
			<CardHeader>
				<Warehouse className='w-8 h-8 mb-2' />
				<h3 className='text-2xl font-medium'>{size}</h3>
			</CardHeader>
			<CardContent className='space-y-2'>
				<p className='text-xl'>Area: {area}m²</p>
				<p className='text-sm'>{dimensions}</p>
				<p className='text-sm'>Suitable for: {suitableFor}</p>
				<p>{price}</p>
			</CardContent>
		</Card>
	)
}
