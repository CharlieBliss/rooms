import { useQuery, queryCache } from 'react-query'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/Link'
import apiRequest from 'api/apiRequest'

export default function Home() {
	const router = useRouter()
	const { id } = router.query
	const { status, data, error } = useQuery(
		['profiles', id],
		apiRequest({path: `profiles/${id}`}),
		{
			initialData: () => {
				console.log(queryCache)
				return queryCache.getQueryData('profiles')?.find(data => data.id === id)
			},
		}
	)
	return (
		<>
			<div>
				Welcome to the profile detail page
			</div>
			<div>
				{data?.name}
			</div>
		</>
	)
}
