import { Section } from '@/components/shared/section'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/utils/cn'
import { Car, CreditCard, Home, Lock, MapPin, Sun, type LucideIcon } from 'lucide-react'

type FeatureCardProps = {
	icon: LucideIcon
	title: string
	description: string
}

const features = [
	{
		icon: Home,
		title: 'Ground level access',
		description: 'Extra wide turning circle for trucks and trailers.'
	},
	{
		icon: MapPin,
		title: 'Central location and parking onsite',
		description: 'Close to SH1, airport, and main arterial routes.'
	},
	{
		icon: CreditCard,
		title: '24/7 swipe access',
		description: 'Access your unit 24/7 with a swipe card.'
	},
	{
		icon: Sun,
		title: 'Unit power',
		description: 'Every unit has individual power supply and lighting.'
	},
	{
		icon: Car,
		title: 'Suitable for vehicle storage',
		description: 'Store your prized vehicles, family caravan or campervan.'
	},
	{
		icon: Lock,
		title: 'Alarmed and monitored storage units',
		description: 'CCTV monitoring of all units.'
	}
]

export default function Features() {
	return (
		<Section id='features' align='center' subtitle='Features include:'>
			<div className='pb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
				{features.map((feature, index) => (
					<FeatureCard key={index} {...feature} />
				))}
			</div>
		</Section>
	)
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
	return (
		<Card className='border-none bg-[#FAF9F9]'>
			<CardContent className='pt-6 pb-8'>
				<div
					className={cn(
						'flex flex-col gap-y-2 items-center justify-center py-8 px-4 transition-colors hover:bg-secondary/20'
					)}
				>
					<div className='flex flex-col gap-y-2 items-center'>
						<div className='bg-brand-800 p-2 rounded-xl text-white transition-colors'>
							<Icon size={24} />
						</div>
						<h2 className='text-xl font-medium text-card-foreground text-center text-balance'>{title}</h2>
					</div>
					<p className='text-sm text-muted-foreground text-balance text-center max-w-md mx-auto'>
						{description}
					</p>
				</div>
			</CardContent>
		</Card>
	)
}
