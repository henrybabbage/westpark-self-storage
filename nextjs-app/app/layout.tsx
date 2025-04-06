import './globals.css'

import { GoogleAnalytics } from '@next/third-parties/google'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'
import { VisualEditing } from 'next-sanity'
import { Inter } from 'next/font/google'
import { draftMode } from 'next/headers'
import { Toaster } from 'sonner'
import { Analytics } from '@vercel/analytics/react'
import Script from 'next/script'
import type { LocalBusiness, WithContext } from 'schema-dts'

import DraftModeToast from '@/app/components/DraftModeToast'
import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import { slab } from '@/app/fonts'
import { TailwindIndicator } from '@/components/utilities/tailwind-indicator'
import { sanityFetch, SanityLive } from '@/sanity/lib/live'
import { settingsQuery } from '@/sanity/lib/queries'
import { resolveOpenGraphImage } from '@/sanity/lib/utils'
import { cn } from '@/utils/cn'
import { handleError } from './client-utils'

/**
 * Generate metadata for the page.
 * Learn more: https://nextjs.org/docs/app/api-reference/functions/generate-metadata#generatemetadata-function
 */
export async function generateMetadata(): Promise<Metadata> {
	const { data: settings } = await sanityFetch({
		query: settingsQuery,
		// Metadata should never contain stega
		stega: false
	})
	const title = 'Westpark Self Storage'
	// settings?.title || demo.title
	const description =
		'For a safe, clean and secure way to store your goods, speak to Westpark Self Storage in Hornby, Christchurch, New Zealand.'
	// settings?.description || demo.description

	const ogImage = resolveOpenGraphImage(settings?.ogImage)
	let metadataBase: URL | undefined = undefined
	try {
		metadataBase = settings?.ogImage?.metadataBase ? new URL(settings.ogImage.metadataBase) : undefined
	} catch {
		// ignore
	}
	return {
		metadataBase,
		title: {
			template: `%s | ${title}`,
			default: title
		},
		description: description,
		//  toPlainText(description)
		openGraph: {
			images: ogImage ? [ogImage] : []
		}
	}
}

const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin'],
	display: 'swap'
})

const GOOGLE_ANALYTICS_ID = process.env.GOOGLE_ANALYTICS_ID

const jsonLd: WithContext<LocalBusiness> = {
	'@context': 'https://schema.org',
	'@type': 'SelfStorage',
	name: 'Westpark Self Storage',
	description:
		'For a safe, clean and secure way to store your goods, speak to Westpark Self Storage in Hornby, Christchurch, New Zealand.',
	url: 'https://westparkselfstorage.co.nz',
	address: {
		'@type': 'PostalAddress',
		streetAddress: '31 Connaught Drive',
		addressLocality: 'Hornby',
		addressRegion: 'Christchurch',
		postalCode: '8042',
		addressCountry: 'NZ'
	},
	geo: {
		'@type': 'GeoCoordinates',
		latitude: -43.54749,
		longitude: 172.50659
	},
	openingHours: 'Mo-Su 00:00-23:59',
	telephone: '+64274977407'
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	const { isEnabled: isDraftMode } = await draftMode()

	return (
		<html lang='en' className={cn(inter.variable, slab.variable, 'bg-white text-black')}>
			<head>
				<Script
					id='schema-westpark'
					type='application/ld+json'
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(jsonLd)
					}}
				/>
			</head>
			<body>
				<section className='min-h-screen pt-24'>
					{/* The <Toaster> component is responsible for rendering toast notifications used in /app/client-utils.ts and /app/components/DraftModeToast.tsx */}
					<Toaster />
					{isDraftMode && (
						<>
							<DraftModeToast />
							{/*  Enable Visual Editing, only to be rendered when Draft Mode is enabled */}
							<VisualEditing />
						</>
					)}
					{/* The <SanityLive> component is responsible for making all sanityFetch calls in your application live, so should always be rendered. */}
					<SanityLive onError={handleError} />
					<Header />
					<main className=''>{children}</main>
					<Footer />
				</section>
				<SpeedInsights />
				<TailwindIndicator />
				<Analytics />
			</body>
			{GOOGLE_ANALYTICS_ID && <GoogleAnalytics gaId={GOOGLE_ANALYTICS_ID} />}
		</html>
	)
}
