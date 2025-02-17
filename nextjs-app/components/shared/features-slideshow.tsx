import facilities from '@/components/pages/onsite-facilities/_assets/facilities.webp'
import interior from '@/components/pages/onsite-facilities/_assets/interior.webp'
import security from '@/components/pages/onsite-facilities/_assets/security.webp'
import storage from '@/components/pages/onsite-facilities/_assets/storage-loading.webp'
import FeaturesVertical from '@/components/ui/features-vertical'
import { Building2, Coffee, ShieldCheck, Truck } from 'lucide-react'

const FEATURES = [
	{
		id: 1,
		title: 'Purpose built',
		content:
			'Our storage facility comprises 51 purpose built tilt slab concrete units. Each storage unit also has its own power supply and lighting.',
		image: interior,
		icon: <Building2 className='w-6 h-6 text-primary' />
	},
	{
		id: 2,
		title: 'Security',
		content:
			'The site is fully fenced for complete security. Each individual unit comes with 24 hour 7 day a week swipe card access.',
		image: security,
		icon: <ShieldCheck className='w-6 h-6 text-primary' />
	},
	{
		id: 3,
		title: 'Convenient access',
		content:
			'Access is easy with wide asphalt entries and turnaround areas between units, making it easier to back trailers around to unload.',
		image: storage,
		icon: <Truck className='w-6 h-6 text-primary' />
	},
	{
		id: 4,
		title: 'Communal facilities',
		content: 'Westpark Self Storage also provides a communal kitchen and toilet facility on site.',
		image: facilities,
		icon: <Coffee className='w-6 h-6 text-primary' />
	}
]

export default function FeaturesSlideshow() {
	return <FeaturesVertical data={FEATURES} />
}
