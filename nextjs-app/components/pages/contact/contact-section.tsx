import ContactFormSection from './contact-form-section'
import MapSection from './map-section'

export default function ContactSection() {
	return (
		<section className='flex flex-col gap-20 pt-12 mb-20'>
			<MapSection />
			<ContactFormSection />
		</section>
	)
}
