'use client'

import { cn } from '@/utils/cn'
import React, { forwardRef, useRef } from 'react'

type SectionProps = {
	id?: string
	title?: string
	subtitle?: string
	description?: string
	children?: React.ReactNode
	className?: string
	align?: 'left' | 'center' | 'right'
}

const Section = forwardRef<HTMLElement, SectionProps>(
	({ id, title, subtitle, description, children, className, align }, forwardedRef) => {
		const internalRef = useRef<HTMLElement>(null)
		const ref = forwardedRef || internalRef
		const alignmentClass = align === 'left' ? 'text-left' : align === 'right' ? 'text-right' : 'text-center'

		return (
			<section id={id} ref={ref}>
				<div className={cn('relative mx-auto container', className)}>
					{(title || subtitle || description) && (
						<div className={cn(alignmentClass, 'relative mx-auto overflow-hidden p-2 py-8 md:py-12')}>
							{title && (
								<h2 className='text-sm text-muted-foreground text-balance font-normal tracking-tight uppercase'>
									{title}
								</h2>
							)}

							{subtitle && (
								<h3
									className={cn(
										'mx-0 mb-8 max-w-full text-3xl text-balance font-normal sm:max-w-full sm:text-4xl md:text-5xl lg:text-5xl leading-[1.2] lg:leading-[1.3] tracking-tight text-foreground',
										align === 'center' ? 'mx-auto' : align === 'right' ? 'ml-auto' : ''
									)}
								>
									{subtitle}
								</h3>
							)}
							{description && (
								<p
									className={cn(
										'mt-6 text-lg leading-8 text-muted-foreground text-balance max-w-2xl',
										align === 'center' ? 'mx-auto' : align === 'right' ? 'ml-auto' : ''
									)}
								>
									{description}
								</p>
							)}
						</div>
					)}
					{children}
				</div>
			</section>
		)
	}
)

Section.displayName = 'Section'

export { Section }
