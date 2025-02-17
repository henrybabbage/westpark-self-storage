import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useId } from 'react'

export default function ContactFormTextArea() {
	const id = useId()
	return (
		<div className='group relative'>
			<Label
				htmlFor={id}
				className='absolute start-1 top-0 z-10 block -translate-y-1/2 bg-background px-2 text-xs font-medium text-foreground group-has-[:disabled]:opacity-50'
			>
				Textarea with overlapping label
			</Label>
			<Textarea id={id} />
		</div>
	)
}
