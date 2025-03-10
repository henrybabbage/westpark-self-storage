import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '@/components/ui/table'

type StorageUnit = {
	id: string
	size: string
	price: string
	area: string
	dimensions: string
	recommendations: string[]
}

type TableWithVerticalLinesProps = {
	data: StorageUnit[]
}

export default function TableWithVerticalLines({ data }: TableWithVerticalLinesProps) {
	return (
		<div className='overflow-hidden rounded-none border border-primary max-w-5xl mx-auto w-full'>
			<Table>
				<TableHeader className='bg-brand-800'>
					<TableRow className='*:border-primary hover:bg-transparent [&>:not(:last-child)]:border-r'>
						<TableHead className='text-background text-base align-middle'>Size</TableHead>
						<TableHead className='text-background text-base align-middle'>Price</TableHead>
						<TableHead className='text-background text-base align-middle'>Area</TableHead>
						<TableHead className='text-background text-base align-middle'>Dimensions</TableHead>
						<TableHead className='text-background text-base align-middle hidden lg:table-cell'>
							Recommendations
						</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{data.map((item) => (
						<TableRow
							key={item.id}
							className='*:border-primary hover:bg-transparent [&>:not(:last-child)]:border-r'
						>
							<TableCell className='font-medium'>{item.size}</TableCell>
							<TableCell>{item.price}</TableCell>
							<TableCell>{item.area}</TableCell>
							<TableCell>{item.dimensions}</TableCell>
							<TableCell className='hidden lg:table-cell'>{item.recommendations.join(', ')}</TableCell>
						</TableRow>
					))}
				</TableBody>
				<TableFooter>
					<TableRow>
						<TableCell
							colSpan={5}
							className='text-center h-12 bg-background hover:bg-transparent py-1 text-sm text-muted-foreground font-normal'
						>
							Prices are per month, GST inclusive.
						</TableCell>
					</TableRow>
				</TableFooter>
			</Table>
		</div>
	)
}
