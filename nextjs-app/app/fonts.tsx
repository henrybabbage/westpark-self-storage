import localFont from 'next/font/local'

export const slab = localFont({
	src: [
		{
			path: '../fonts/RockwellNova/RockwellNova-Regular.woff2',
			weight: '400',
			style: 'normal'
		},
		{
			path: '../fonts/RockwellNova/RockwellNova-Italic.woff2',
			weight: '400',
			style: 'italic'
		},
		{
			path: '../fonts/RockwellNova/RockwellNova-Bold.woff2',
			weight: '700',
			style: 'normal'
		},
		{
			path: '../fonts/RockwellNova/RockwellNova-BoldItalic.woff2',
			weight: '700',
			style: 'italic'
		},
		{
			path: '../fonts/RockwellNova/RockwellNova-ExtraBold.woff2',
			weight: '800',
			style: 'normal'
		},
		{
			path: '../fonts/RockwellNova/RockwellNova-ExtraBoldItalic.woff2',
			weight: '800',
			style: 'italic'
		}
	],
	display: 'swap',
	variable: '--font-slab'
})
