import { useEffect } from 'react'
import Layout from 'components/Layout'
import { createContext, useState } from 'react'
import { getCurrentJwtToken } from 'auth/awsAmplify'

const emptyObj = {}
export const AuthContext = createContext(emptyObj)

const App = ({ Component, pageProps }) => {
	const [authenticated, setAuthenticated] = useState()
	useEffect(
		() => {
			const jwt = getCurrentJwtToken()
			if (jwt) {
				setAuthenticated(true)
			}
		},
		[]
	)
	const context = {
		authenticated, setAuthenticated
	}
	return (
		<Layout>
			<AuthContext.Provider value={context} >
				<Component {...pageProps} />
			</AuthContext.Provider>
		</Layout>
	)
}

export default App