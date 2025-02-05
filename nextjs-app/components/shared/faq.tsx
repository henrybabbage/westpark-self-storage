import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/shared/accordion'
import { ChevronUp } from 'lucide-react'

const CONTENT = [
	{
		title: 'How far away is Westpark from Christchuch?',
		value: 'distance',
		content: 'Westpark Self Storage is a 20 minute drive from the Christchurch city center.'
	},
	{
		title: 'What security features do you have?',
		value: 'security-features',
		content:
			'The site is fully fenced for complete security. Each individual unit comes with 24 hour 7 day a week swipe card access. Each storage unit also has its own power supply and lighting.'
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
			'You can store household items, office furniture, materials, vehicles. Speak to us if there is anything you are unsure about.'
	},
	{
		title: 'Is there a minimum term contract?',
		value: 'contract-term',
		content: 'We have no minimum term for contracts.'
	},
	{
		title: 'Do you offer discounts?',
		value: 'discounts',
		content: 'We offer discounts for multiple unit hire or for long term contracts. Contact us to discuss.'
	}
]

export function Faq() {
	return (
		<div className='py-24 sm:py-32'>
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
