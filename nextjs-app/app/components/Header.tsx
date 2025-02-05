'use client'

import { Button } from '@/components/ui/button'
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger
} from '@/components/ui/sheet'
import { cn } from '@/utils/cn'
import { useMotionValueEvent, useScroll } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const menuItem = [
	{
		id: 1,
		label: 'Onsite Facilities',
		href: '/onsite-facilities'
	},
	{
		id: 2,
		label: 'Pricing',
		href: '/pricing'
	},
	{
		id: 3,
		label: 'Contact',
		href: '/contact'
	}
]

export default function Header() {
	const [headerHidden, setHeaderHidden] = useState(false)
	const [navSheetIsOpen, setNavSheetIsOpen] = useState(false)

	const { scrollY } = useScroll()

	useMotionValueEvent(scrollY, 'change', (latest) => {
		const previous = scrollY.getPrevious() ?? 0
		if (latest > previous && latest > 100) {
			setHeaderHidden(true)
		} else {
			setHeaderHidden(false)
		}
	})

	// Lock scroll
	useEffect(() => {
		const html = document.querySelector('html')
		if (html) html.classList.toggle('overflow-hidden', navSheetIsOpen)
	}, [navSheetIsOpen])

	useEffect(() => {
		const closeHamburgerNavigation = () => setNavSheetIsOpen(false)
		window.addEventListener('orientationchange', closeHamburgerNavigation)
		window.addEventListener('resize', closeHamburgerNavigation)

		return () => {
			window.removeEventListener('orientationchange', closeHamburgerNavigation)
			window.removeEventListener('resize', closeHamburgerNavigation)
		}
	}, [setNavSheetIsOpen])

	return (
		<header className='fixed flex items-center left-0 right-0 top-0 z-50 bg-white'>
			<div className='flex mx-auto container items-center justify-between w-full py-6'>
				<Link className='flex cursor-pointer font-medium hover:text-brand-800' href='/'>
					Westpark Self Storage
				</Link>

				<nav className='hidden md:block'>
					<ul
						role='list'
						className='flex items-center gap-6 leading-5 text-sm md:text-base tracking-tight font-normal'
					>
						{menuItem.map((item) => (
							<li key={item.label} className='flex gap-5'>
								<Link
									href={item.href}
									className='font-medium whitespace-nowrap text-primary hover:text-brand-800 transition-colors'
								>
									{item.label}
								</Link>
							</li>
						))}
						<li className='flex'>
							<Link
								className='font-medium whitespace-nowrap rounded-full flex gap-2 items-center bg-primary hover:bg-brand-800 p-1 sm:py-3 sm:px-6 text-white transition-colors duration-200'
								href='tel:0274977407'
							>
								0274 977407
							</Link>
						</li>
					</ul>
				</nav>

				<Sheet open={navSheetIsOpen} onOpenChange={setNavSheetIsOpen}>
					<SheetTrigger asChild className='block md:hidden'>
						<Button variant='minimal' size='minimal'>
							Menu
						</Button>
					</SheetTrigger>
					<SheetContent
						onOpenAutoFocus={(e) => e.preventDefault()}
						onCloseAutoFocus={(e) => e.preventDefault()}
						side='none'
						className='container mx-auto flex flex-col gap-y-24 py-6 px-6 md:hidden bg-background left-0 right-0 top-0 h-full w-full'
					>
						<SheetHeader className='flex w-full justify-between items-baseline flex-nowrap'>
							<SheetTitle className='m-0'>
								<Link
									className='font-medium text-sm hover:text-brand-800 w-fit'
									href='/'
									onClick={() => setNavSheetIsOpen(false)}
								>
									Westpark Self Storage
								</Link>
							</SheetTitle>
							<SheetClose asChild>
								<button
									aria-label='Close menu'
									onClick={() => setNavSheetIsOpen(false)}
									className='w-fit text-sm text-primary hover:text-primary/50'
								>
									Close
									<span className='sr-only'>Close</span>
								</button>
							</SheetClose>
						</SheetHeader>

						<nav className=''>
							<ul className='flex flex-col gap-4'>
								{menuItem.map((item) => (
									<li key={item.id} className='py-0.5'>
										<Link
											className={cn(
												'hover:text-grey cursor-pointer font-medium text-sm flex h-full w-full items-center transition-[color,transform] duration-300'
											)}
											href={item.href}
											onClick={() => setNavSheetIsOpen(false)}
										>
											{item.label}
										</Link>
									</li>
								))}
							</ul>
						</nav>

						<SheetFooter></SheetFooter>
					</SheetContent>
				</Sheet>
			</div>
		</header>
	)
}
