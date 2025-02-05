'use client'

import 'mapbox-gl/dist/mapbox-gl.css'
import Map, { Marker } from 'react-map-gl'

const TOKEN = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN

export default function InteractiveMap() {
	return (
		<div className='w-full aspect-square rounded-xl'>
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
