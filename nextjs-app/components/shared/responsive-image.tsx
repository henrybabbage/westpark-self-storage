import Image, { type StaticImageData } from 'next/image'

type ResponsiveImageProps = {
	src: StaticImageData | string
	alt: string
	aspectRatio?: 'square' | '16/9'
	className?: string
}

export function ResponsiveImage({ src, alt, aspectRatio = 'square', className = '' }: ResponsiveImageProps) {
	return (
		<div
			className={`relative w-full ${
				aspectRatio === 'square' ? 'aspect-square md:aspect-[16/9]' : 'aspect-[16/9]'
			} rounded-md ${className}`}
		>
			<Image src={src} alt={alt} sizes='100vw' priority fill className='object-cover rounded-md' />
		</div>
	)
}
