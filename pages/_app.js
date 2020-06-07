import Layout from 'components/Layout'
import { createContext, useState } from 'react'

const emptyObj = {}
export const AuthContext = createContext(emptyObj)

const App = ({ Component, pageProps }) => {
	const [authenticated, setAuthenticated] = useState()
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