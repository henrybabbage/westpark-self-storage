import ContactFormSection from './contact-form'
import MapSection from './map-section'

export default function ContactSection() {
	return (
		<div className='flex flex-col gap-20 mb-20'>
			<MapSection />
			<ContactFormSection />
		</div>
	)
}
