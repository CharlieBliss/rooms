import { useQuery, queryCache } from 'react-query'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/Link'
import apiRequest from 'api/apiRequest'

export default function Home() {
	const router = useRouter()
	const { id } = router.query
	const { status, data, error } = useQuery(
		['tracks', id],
		apiRequest({path: `tracks/${id}`}),
		{
			initialData: () => {
				console.log(queryCache)
				return queryCache.getQueryData('tracks')?.find(data => data.id === id)
			},
		}
	)
	return (
		<>
			<div>
				Welcome to the track detail page
			</div>
			<div>
				{data?.title}
			</div>
		</>
	)
}
