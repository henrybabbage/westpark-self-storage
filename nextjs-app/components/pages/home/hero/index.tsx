import { Icons } from '@/components/shared/icons'
import { Section } from '@/components/shared/section'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/cn'
import { motion } from 'framer-motion'
import Link from 'next/link'

const ease = [0.16, 1, 0.3, 1]

function HeroTitles() {
	return (
		<div className='flex w-full max-w-3xl flex-col overflow-hidden pt-8'>
			<motion.h1
				className='text-left text-4xl font-semibold leading-tighter text-foreground sm:text-5xl md:text-6xl tracking-tighter'
				initial={{ filter: 'blur(10px)', opacity: 0, y: 50 }}
				animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
				transition={{
					duration: 1,
					ease,
					staggerChildren: 0.2
				}}
			>
				<motion.span
					className='inline-block text-balance'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{
						duration: 0.8,
						delay: 0.5,
						ease
					}}
				>
					Keep it safe at Westpark
				</motion.span>
			</motion.h1>
			<motion.p
				className='text-left max-w-xl leading-normal text-muted-foreground sm:text-lg sm:leading-normal text-balance'
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					delay: 0.6,
					duration: 0.8,
					ease
				}}
			>
				Westpark has units with 24 hour 7 days a week swipe card access
			</motion.p>
		</div>
	)
}

function HeroCTA() {
	return (
		<div className='relative mt-6'>
			<motion.div
				className='flex w-full max-w-2xl flex-col items-start justify-start space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0'
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.8, duration: 0.8, ease }}
			>
				<Link
					href='/pricing'
					className={cn(
						buttonVariants({ variant: 'default' }),
						'w-full sm:w-auto text-background flex gap-2 rounded-lg'
					)}
				>
					<Icons.logo className='h-6 w-6' />
					See pricing
				</Link>
			</motion.div>
			<motion.p
				className='mt-3 text-sm text-muted-foreground text-left'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1.0, duration: 0.8 }}
			>
				Westpark description
			</motion.p>
		</div>
	)
}

export default function Hero() {
	return (
		<Section>
			<div className='relative grid grid-cols-1 lg:grid-cols-2 gap-x-8 w-full p-6 lg:p-12 border-x overflow-hidden'>
				<div className='flex flex-col justify-start items-start lg:col-span-1'>
					<HeroTitles />
					<HeroCTA />
				</div>
				<div className='relative lg:h-full lg:col-span-1'>
					<h3>Westpark image or description</h3>
				</div>
			</div>
		</Section>
	)
}
