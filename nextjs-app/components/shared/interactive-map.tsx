'use client'

import Map from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

export default function InteractiveMap() {
	return (
		<Map
			mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
			initialViewState={{
				longitude: 172.50659,
				latitude: -43.54749,
				zoom: 14
			}}
			style={{ width: 600, height: 400 }}
			mapStyle='mapbox://styles/mapbox/streets-v9'
		/>
	)
}
