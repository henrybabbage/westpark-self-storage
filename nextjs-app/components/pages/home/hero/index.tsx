import { Section } from '@/components/shared/section'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/utils/cn'
import Link from 'next/link'

export default function HeroSection() {
	return (
		<Section id='westpark'>
			<div className='py-12 max-w-full h-full'>
				<div className='flex flex-col gap-8 justify-start items-start h-full w-full'>
					<HeroTitles />
					<HeroCTA />
				</div>
			</div>
		</Section>
	)
}

function HeroTitles() {
	return (
		<div className='flex w-fit flex-col gap-8 h-full'>
			<h1 className='text-[#000] text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-medium tracking-tighter text-left leading-none'>
				Keep it safe at
				<span> </span>
				<span className='text-brand-800 font-slab text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-normal tracking-tight text-left leading-none'>
					Westpark
				</span>
			</h1>
		</div>
	)
}

function HeroCTA() {
	return (
		<div className='relative flex flex-col gap-8'>
			<div className='flex flex-col gap-4 max-w-screen-md'>
				<h3 className='font-medium text-lg leading-snug'>
					Select from a range of self storage units with 24 hour access 7 days a week to our clean, dry,
					secure facilities. Call today, store tomorrow!
				</h3>
			</div>
			<div className='flex w-full gap-4 items-start justify-start'>
				<Link href='/onsite-facilities' className={cn(buttonVariants({ variant: 'brand' }), '')}>
					Compare units
				</Link>
				<Link href='/pricing' className={cn(buttonVariants({ variant: 'outline' }), '')}>
					See pricing
				</Link>
			</div>
		</div>
	)
}
