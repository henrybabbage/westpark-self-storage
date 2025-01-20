import Link from 'next/link'

export default async function Page() {
	return (
		<>
			<div className='bg-gradient-to-r from-red-200 from-0% via-white via-40%  relative'>
				<div className='bg-gradient-to-b from-white w-full h-40 absolute top-0'></div>
				<div className='bg-gradient-to-t from-white w-full h-40 absolute bottom-0'></div>
				<div className='container relative'>
					<div className='mx-auto max-w-2xl py-20 lg:max-w-4xl lg:px-12 text-center'>
						<div className='flex flex-col gap-4 items-center'>
							<div className=' text-md leading-6 prose uppercase'>Keep it safe at</div>
							<h1 className='font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-black'>
								<Link className='text-brand-800 ' href='https://sanity.io/'>
									Westpark
								</Link>{' '}
								<Link className='text-[#000] ' href='https://nextjs.org/'>
									Self Storage
								</Link>
							</h1>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
