import FacilityImageSection from '@/components/pages/home/facility-image'
import Features from '@/components/pages/home/features'
import HeroSection from '@/components/pages/home/hero'
import HeroImageSection from '@/components/pages/home/hero-image'
import Units from '@/components/pages/home/units'
import { Lenis } from '@/components/utilities/lenis'

export default async function Page() {
	return (
		<>
			<Lenis root />
			<HeroSection />
			<HeroImageSection />
			<Units />
			<FacilityImageSection />
			<Features />
		</>
	)
}
