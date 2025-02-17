import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useId } from 'react'

type RequiredInputProps = React.ComponentProps<typeof Input> & {
	label?: string
}

export default function RequiredInput({ label, ...props }: RequiredInputProps) {
	const id = useId()
	return (
		<div>
			<Label htmlFor={id}>
				{label || props.placeholder || 'Input'} <span className='text-destructive'>*</span>
			</Label>
			<div className='space-y-2'>
				<Input id={id} {...props} />
			</div>
		</div>
	)
}
