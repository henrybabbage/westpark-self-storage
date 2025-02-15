import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/shared/accordion'
import { ChevronUp } from 'lucide-react'

const CONTENT = [
	{
		title: 'How far away is Westpark from the city centre?',
		value: 'distance',
		content: 'Westpark Self Storage is a 20 minute drive from the Christchurch city centre.'
	},
	{
		title: 'What are the security features?',
		value: 'security-features',
		content:
			'The site is fully fenced for complete security. Each tenant is provided a personalised swipe card to access the facility. We prioritise the safety of your possessions with enhanced security measures, including CCTV surveillance, alarm systems and secure electronic gate access. Our contracted security firm will react immediately to any alarm activation.'
	},
	{
		title: 'Do I get 24/7 access?',
		value: 'access',
		content: 'Yes. You get a swipe card that gives you 24/7 access to your unit.'
	},
	{
		title: 'What am I allowed to store in the units?',
		value: 'storage',
		content:
			'You can store most things, including household items, office furniture, commercial goods and equipment, boats, trailers, motor vehicles. However, for safety and legal reasons, you cannot store hazardous materials, flammable items, perishable goods, living things, or illegal substances. Speak to us if there is anything you are unsure about.'
	},
	{
		title: 'Is there a minimum term contract?',
		value: 'contract-term',
		content: 'We have a minimum rental period of one month.'
	},
	{
		title: 'Do you offer discounts?',
		value: 'discounts',
		content: 'We offer discounts for multiple unit hire or for long term contracts. Contact us to discuss.'
	}
]

export function Faq() {
	return (
		<div className='py-12 sm:py-12'>
			<div className='mx-auto max-w-7xl px-6 lg:px-8'>
				<div className='grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12'>
					<div className='py-0 text-left md:py-4'>
						<h2 className='mb-4 text-2xl font-medium text-zinc-900 dark:text-white'>
							Frequently asked questions
						</h2>
						<p className='text-base text-zinc-500 dark:text-zinc-400'>
							Find answers to some of the most common questions we receive.
						</p>
					</div>
					<div className='col-span-2 border-t border-zinc-200 px-3 dark:border-zinc-700 sm:px-0 md:border-none'>
						<Accordion
							className='flex w-full flex-col divide-y divide-zinc-200 dark:divide-zinc-700'
							transition={{ duration: 0.2, ease: 'easeInOut' }}
						>
							{CONTENT.map((item) => (
								<AccordionItem key={item.value} value={item.value} className='py-4'>
									<AccordionTrigger className='w-full text-left text-zinc-950 dark:text-zinc-50'>
										<div className='flex items-center justify-between'>
											<div>{item.title}</div>
											<ChevronUp className='h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-[expanded]:-rotate-180 dark:text-zinc-50' />
										</div>
									</AccordionTrigger>
									<AccordionContent>
										<p className='pt-2 text-zinc-500 dark:text-zinc-400'>{item.content}</p>
									</AccordionContent>
								</AccordionItem>
							))}
						</Accordion>
					</div>
				</div>
			</div>
		</div>
	)
}
