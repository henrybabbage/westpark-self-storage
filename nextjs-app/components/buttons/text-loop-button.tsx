import React from 'react'

export default function TextLoopButton({ text = 'Hover me' }: { text: string }) {
  return (
		<button className='group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 font-medium text-neutral-200 duration-500'>
			<div className='translate-y-0 transition group-hover:-translate-y-[150%]'>{text}</div>
			<div className='absolute translate-y-[150%] transition group-hover:translate-y-0'>{text}</div>
		</button>
  )
}
