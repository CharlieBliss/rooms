import { useContext, memo} from 'react'
import map from 'ramda/src/map'
import { useQuery, queryCache } from 'react-query'
import apiRequest from 'api/apiRequest'
import Head from 'next/head'
import Link from 'next/Link'
import { currentAwsToken } from 'auth/awsAmplify'
import { AuthContext } from 'pages/_app'


const Discover = () => {
	const { authenticated } = useContext(AuthContext)
	const { status, data, error } = useQuery(
		'tracks',
		apiRequest({path: 'tracks'}),
		{
			initialData: queryCache.getQueryData('tracks')
		}
	)
	console.log('render')
	if(authenticated) {
		return (
			<div>
				<div>
					Hello, this is the discover page. You need to be authenticated to see me.
				</div>
				<ul>
					{
						data?.results.map(
							item => <li key={item.id}>{item.title}</li>
						)
					}
				</ul>
			</div>
		)
	}
	return (
		<div>
			Warnign you are banned
		</div>
	)
}

export default Discover
