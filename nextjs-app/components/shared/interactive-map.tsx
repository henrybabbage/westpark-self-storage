'use client'

import 'mapbox-gl/dist/mapbox-gl.css'
import { useCallback, useRef } from 'react'
import Map, { Marker } from 'react-map-gl'

const TOKEN = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN

export default function InteractiveMap() {
	const mapRef = useRef<HTMLDivElement>(null)

	const disableScroll = useCallback(() => {
		document.body.style.overflow = 'hidden'
		document.body.style.touchAction = 'none'
		document.body.setAttribute('data-lenis-prevent', 'true')
	}, [])

	const enableScroll = useCallback(() => {
		document.body.style.overflow = 'auto'
		document.body.style.touchAction = 'auto'
		document.body.removeAttribute('data-lenis-prevent')
	}, [])

	return (
		<div
			ref={mapRef}
			data-lenis-prevent
			className='w-full aspect-square rounded-xl'
			onMouseEnter={disableScroll}
			onMouseLeave={enableScroll}
			onTouchStart={disableScroll}
			onTouchEnd={enableScroll}
		>
			<Map
				mapboxAccessToken={TOKEN}
				initialViewState={{
					longitude: 172.50659,
					latitude: -43.54749,
					zoom: 12
				}}
				style={{ width: '100%', height: '100%' }}
				mapStyle='mapbox://styles/mapbox/streets-v12'
				attributionControl={false}
			>
				<Marker longitude={172.50659} latitude={-43.54749} color='red' />
			</Map>
		</div>
	)
}
