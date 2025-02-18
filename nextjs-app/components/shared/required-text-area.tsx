import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useId } from 'react'

type RequiredTextAreaProps = React.ComponentProps<typeof Textarea> & {
	label?: string
}

export default function RequiredTextArea({ label, ...props }: RequiredTextAreaProps) {
	const id = useId()
	return (
		<div>
			<Label htmlFor={id} className='text-base'>
				{label || props.placeholder || 'Message'} <span className='text-base text-destructive'>*</span>
			</Label>
			<div className='space-y-2'>
				<Textarea id={id} {...props} />
			</div>
		</div>
	)
}
