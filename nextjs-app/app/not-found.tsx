import Link from 'next/link'

export default function NotFound() {
	return (
		<div className='flex flex-col items-center justify-center h-screen bg-background'>
			<h2 className='text-2xl font-medium'>Page Not Found</h2>
			<p className='text-sm text-muted-foreground'>Could not find requested resource.</p>
			<Link href='/' className='text-sm text-muted-foreground'>
				Return to Westpark Self Storage
			</Link>
		</div>
	)
}
