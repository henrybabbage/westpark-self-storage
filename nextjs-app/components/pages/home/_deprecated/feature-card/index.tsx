import { Card, CardContent } from '@/components/ui/card'
import { LucideIcon } from 'lucide-react'

type FeatureCardProps = {
	icon: LucideIcon
	title: string
	description: string
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
	return (
		<Card className='border-none bg-[#FAF9F9]'>
			<CardContent className='pt-6 pb-8'>
				<div className='rounded-lg bg-[#F2E5E5] p-2 w-12 h-12 flex items-center justify-center mb-6'>
					<Icon className='w-6 h-6 text-black' />
				</div>
				<h3 className='text-xl font-bold mb-2'>{title}</h3>
				<p className='text-gray-600'>{description}</p>
			</CardContent>
		</Card>
	)
}
