import storage from '@/components/pages/onsite-facilities/_assets/storage.jpg'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/shared/accordion'
import { ResponsiveImage } from '@/components/shared/responsive-image'
import { Section } from '@/components/shared/section'

type FaqItem = {
	question: string
	answer: string
}

const faqItems: FaqItem[] = [
	{
		question: 'How far away is Westpark from Christchuch?',
		answer: ''
	},
	{
		question: 'What security features do you have?',
		answer: 'The site is fully fenced for complete security. Each individual unit comes with 24 hour 7 day a week swipe card access. Each storage unit also has its own power supply and lighting.'
	},
	{
		question: 'Do I get 24/7 access?',
		answer: 'Yes. You get a swipe card that gives you 24/7 access to your unit.'
	},
	{
		question: 'What am I allowed to store in the units?',
		answer: ''
	},
	{
		question: 'Is there a minimum term contract?',
		answer: ''
	},
	{
		question: 'Do you offer discounts for longer term contracts?',
		answer: ''
	}
]

export default function FAQSection() {
	return (
		<Section
			id='faq'
			subtitle='Our units are individually alarmed and are built on thick concrete slabs to ensure they always stay
					clean and dry.'
		>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
				<div className='relative'>
					<Accordion>
						{faqItems.map((item, index) => (
							<AccordionItem key={index} value={`item-${index}`}>
								<AccordionTrigger>{item.question}</AccordionTrigger>
								<AccordionContent>{item.answer}</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</div>
				<div className='relative h-auto w-full md:w-1/2'>
					<ResponsiveImage src={storage} alt='Interior of a storage unit' className='mb-20' />
				</div>
			</div>
		</Section>
	)
}
