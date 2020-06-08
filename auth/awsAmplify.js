import Amplify from 'aws-amplify'
import { Auth } from 'aws-amplify'
import initApp from 'auth/initApp'

const region = 'us-east-1'
const userPoolId = process.env.NEXT_PUBLIC_AWS_USER_POOL
const clientId = process.env.NEXT_PUBLIC_AWS_CLIENT_ID
const identityPoolId = process.env.NEXT_PUBLIC_AWS_IDENTITY_POOL
const publicAssetBucketName = process.env.NEXT_PUBLIC_AWS_PUBLIC_ASSET

console.log(region, identityPoolId, userPoolId, clientId)

Amplify.configure({
	region,
	identityPoolId,
	userPoolId,
	userPoolWebClientId: clientId,
})
// Amplify.register(AmpAuth)

// AmpStorage.configure({
// 	AWSS3: {
// 		region,
// 		bucket: publicAssetBucketName,
// 		customPrefix: {
// 			private: '',
// 			public: '',
// 		},
// 	},
// })
// Amplify.register(AmpStorage)


export const getCurrentJwtToken = async () => {
	const session = await Auth.currentSession()
	return session.getIdToken().getJwtToken()
}


export const login = async (username, password, setAuth) => {
	const request = await Auth.signIn(username, password)
	initApp(setAuth)
}
// export const { Auth, Storage } = Amplify
