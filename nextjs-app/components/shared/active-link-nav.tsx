import { AnimatedBackground } from '@/components/ui/animated-background'

export function ActiveLinkNav() {
	const TABS = ['Onsite Facilities', 'Pricing', 'Contact']

	return (
		<div className='py-24 sm:py-32'>
			<div className='mx-auto flex max-w-7xl justify-center px-6 lg:px-8'>
				<div className='flex max-w-full flex-nowrap overflow-x-auto'>
					<AnimatedBackground
						defaultValue={TABS[0]}
						className='rounded-lg bg-zinc-100'
						transition={{
							type: 'spring',
							bounce: 0.2,
							duration: 0.3
						}}
					>
						{TABS.map((tab, index) => (
							<button
								key={index}
								data-id={tab}
								type='button'
								className='px-3 py-2 text-sm text-zinc-600 transition-colors duration-300 hover:text-zinc-950 data-[checked=true]:text-black'
							>
								{tab}
							</button>
						))}
					</AnimatedBackground>
				</div>
			</div>
		</div>
	)
}
