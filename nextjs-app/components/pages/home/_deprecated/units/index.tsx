import { UnitCard } from '../unit-card/index'

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

export function UnitsSection() {
	return (
		<section className='container mx-auto px-4 py-16'>
			<div className='text-center mb-16 space-y-2'>
				<h2 className='text-4xl font-normal'>We have 4 different sized storage units available.</h2>
				<p className='text-2xl'>Each unit has a door height of 3m.</p>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 h-16'>
				{units.map((unit) => (
					<UnitCard
						key={unit.size}
						size={unit.size}
						area={unit.area}
						dimensions={unit.dimensions}
						suitableFor={unit.suitableFor}
						price={unit.price}
					/>
				))}
			</div>
		</section>
	)
}
