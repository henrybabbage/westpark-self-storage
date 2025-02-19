// import { sanityFetch } from '@/sanity/lib/live'
// import { pagesSlugs, postPagesSlugs } from '@/sanity/lib/queries'
import { MetadataRoute } from 'next'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://westparkselfstorage.co.nz'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	// Fetch dynamic pages from Sanity
	// const { data: pages } = await sanityFetch({ query: pagesSlugs })
	// const { data: posts } = await sanityFetch({ query: postPagesSlugs })

	// Static routes
	const staticRoutes = [
		{
			url: baseUrl,
			lastModified: new Date(),
			changeFrequency: 'monthly' as const,
			priority: 1
		},
		{
			url: `${baseUrl}/pricing`,
			lastModified: new Date(),
			changeFrequency: 'monthly' as const,
			priority: 0.8
		},
		{
			url: `${baseUrl}/contact`,
			lastModified: new Date(),
			changeFrequency: 'yearly' as const,
			priority: 0.5
		},
		{
			url: `${baseUrl}/onsite-facilities`,
			lastModified: new Date(),
			changeFrequency: 'yearly' as const,
			priority: 0.8
		}
	]

	// Dynamic routes from Sanity pages
	// const pageRoutes =
	// 	pages?.map((page) => ({
	// 		url: `${baseUrl}/${page.slug}`,
	// 		lastModified: new Date(),
	// 		changeFrequency: 'monthly' as const,
	// 		priority: 0.7
	// 	})) || []

	// Dynamic routes from Sanity posts
	// const postRoutes =
	// 	posts?.map((post) => ({
	// 		url: `${baseUrl}/posts/${post.slug}`,
	// 		lastModified: new Date(),
	// 		changeFrequency: 'monthly' as const,
	// 		priority: 0.6
	// 	})) || []

	return [...staticRoutes]
}
