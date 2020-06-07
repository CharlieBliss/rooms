import { useContext } from 'react'
import Head from 'next/head'
import Link from 'next/Link'
import { currentAwsToken } from 'auth/awsAmplify'
import { AuthContext } from 'pages/_app'

const Discover = () => {
	const { authenticated } = useContext(AuthContext)
	if(authenticated) {
		return (
			<div>
				Hello, this is the discover page. You need to be authenticated to see me.
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
