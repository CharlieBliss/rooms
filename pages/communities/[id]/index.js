import { useQuery, queryCache } from 'react-query'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/Link'
import apiRequest from 'api/apiRequest'

export default function Home() {
	const router = useRouter()
	const { id } = router.query
	const { status, data, error } = useQuery(
		['communities', id],
		apiRequest({path: `communities/${id}`}),
		{
			initialData: () => {
				console.log(queryCache)
				return queryCache.getQueryData('communities')?.find(data => data.id === id)
			},
		}
	)
	return (
		<>
			<div>
				Welcome to the community detail page
			</div>
			<div>
				{data?.name}
			</div>
		</>
	)
}
