import { Car, CreditCard, Home, Lock, MapPin, Sun } from 'lucide-react'
import { FeatureCard } from '../feature-card'

const features = [
	{
		icon: Home,
		title: 'Ground level access',
		description: 'Our units have modern security monitoring.'
	},
	{
		icon: MapPin,
		title: 'Central location and parking onsite',
		description: 'Our units have modern security monitoring.'
	},
	{
		icon: CreditCard,
		title: '24/7 swipe access',
		description: 'Our units have modern security monitoring.'
	},
	{
		icon: Sun,
		title: 'Unit power supply and lighting',
		description: 'Our units have modern security monitoring.'
	},
	{
		icon: Car,
		title: 'Suitable for vehicle storage',
		description: 'Our units have modern security monitoring.'
	},
	{
		icon: Lock,
		title: 'Alarmed and patrolled storage units',
		description: 'Our units have modern security monitoring.'
	}
]

export function Features() {
	return (
		<div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
			{features.map((feature, index) => (
				<FeatureCard key={index} {...feature} />
			))}
		</div>
	)
}
