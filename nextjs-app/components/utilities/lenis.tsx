'use client'

import { cancelFrame, frame } from 'framer-motion'
import { type LenisOptions } from 'lenis'
import 'lenis/dist/lenis.css'
import { ReactLenis, type LenisRef } from 'lenis/react'
import { useEffect, useRef } from 'react'

export function Lenis({ root, options }: { root?: boolean; options?: LenisOptions }) {
	const lenisRef = useRef<LenisRef>(null)

	useEffect(() => {
		function update(data: { timestamp: number }) {
			const time = data.timestamp
			lenisRef.current?.lenis?.raf(time)
		}

		frame.update(update, true)

		return () => cancelFrame(update)
	}, [])

	return (
		<ReactLenis
			ref={lenisRef}
			root={root}
			options={{
				...options,
				anchors: {
					offset: -100
				},
				autoRaf: false,
				prevent: (node: Element) => {
					return node.nodeName === 'VERCEL-LIVE-FEEDBACK' || node.hasAttribute('data-scroll-locked')
				}
			}}
		/>
	)
}
