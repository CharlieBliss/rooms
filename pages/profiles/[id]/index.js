import { useQuery, queryCache } from 'react-query'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/Link'
import useFetchRecord from 'api/useFetchRecord'

export default function Home() {
	const router = useRouter()
	const { id } = router.query
	const { data } = useFetchRecord('profiles', id)
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
