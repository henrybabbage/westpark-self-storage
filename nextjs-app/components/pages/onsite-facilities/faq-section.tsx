import storage from '@/components/pages/onsite-facilities/_assets/storage.jpg'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/shared/accordion'
import { Faq } from '@/components/shared/faq'
import { ResponsiveImage } from '@/components/shared/responsive-image'
import { Section } from '@/components/shared/section'


export default function FAQSection() {
	return (
		<Section
			id='faq'
			subtitle='Our units are individually alarmed and are built on thick concrete slabs to ensure they always stay
					clean and dry.'
		>
			<Faq />
		</Section>
	)
}
