const { constantCase } = require('change-case')
const { includes } = require('ramda')

const { iotEndpointDomain } = require('../app.json')

GA_STAGING_ID = UA-143985920-2
GA_PRODUCTION_ID = UA-143985920-3
HJ_STAGING_ID = 1406930
HJ_PRODUCTION_ID = 1414131
BRANCH_STAGING_ID = key_live_ncKHVpPX3zjv29Ls0bLmUeemzCordRkr
BRANCH_PROD_ID = key_live_aoTGbABqAbLQhAWZkyEDogjbrFcXougT

const stackOutputVars = [
	'apiDnsName',
	'userPoolId',
	'clientId',
	'identityPoolId',
	'rawAudioBucketName',
	'transcodedAudioBucketName',
	'publicAssetBucketName',
	'waveformBucketName',
	'resizedImageBucketName',
]
const appConstants = process.env.STACK_ENV_VARS
	// Defaults for local dev
	|| JSON.stringify([
		{ OutputKey: 'apiDnsName', OutputValue: 'staging.api.quadio.com' },
		{ OutputKey: 'userPoolId', OutputValue: 'us-east-1_9p9e9Jedd' },
		{ OutputKey: 'clientId', OutputValue: '3vnh6rn1tb4sfhqfqveqn0g9ki' },
		{ OutputKey: 'identityPoolId', OutputValue: 'us-east-1:31c9f407-5663-4726-8cd9-9c3b3e92fd87' },
		{ OutputKey: 'rawAudioBucketName', OutputValue: 'quadio-staging-quadiostagingrawaudiobucket-x1tso4vxy0hp' },
		{ OutputKey: 'transcodedAudioBucketName', OutputValue: 'quadio-staging-quadiostagingtranscodedaudiobucket-1dexe6oqqgas1' },
		{ OutputKey: 'publicAssetBucketName', OutputValue: 'quadio-staging-quadiostagingpublicassetbucket-15hs2t53r749r' },
		{ OutputKey: 'waveformBucketName', OutputValue: 'quadio-staging-quadiostagingwaveformbucket-14adgtlr9tu8r' },
		{ OutputKey: 'resizedImageBucketName', OutputValue: 'quadio-staging-quadiostagingresizedimagebucket-7170cv1my24u' },
	])

const environment = process.env.ENVIRONMENT_NAME || 'local'
const isProduction = environment === 'production'

const clientDomainMap = {
	local: 'localhost:8686',
	staging: 'staging.quadio.com',
	demo: 'demo.quadio.com',
	production: 'app.quadio.com',
}

const envDomainMap = {
	local: 'staging',
	staging: 'staging',
	demo: 'demo',
	production: 'app',
}

module.exports = Object.assign(
	{
		__ENV__: environment,
		__APP_NAME__: 'quadio',
		__APP_NAME_DISPLAY__: 'Quadio',
		__SHA__: process.env.CIRCLE_SHA1 || 'dev',
		__IOT_ENDPOINT_DOMAIN__: iotEndpointDomain,
		__HOTJAR_ID__: isProduction
			? HJ_PRODUCTION_ID : HJ_STAGING_ID,
		__GOOGLE_ANALYTICS__: isProduction
			? GA_PRODUCTION_ID : GA_STAGING_ID,
		__INTERCOM_APP_ID__: isProduction
			? 'ghqdl10s'
			: 'oxyuchss',
		__SEGMENT_SOURCE_ID__: isProduction
			? 'MPl8bVQDiAfAS7DBVq1ZgYB6QnxEwnct'
			: 'TMfwx7fKX3SuupIHylPHrQbODxucEYxn',
		__STREAM_CHAT_TOKEN__: isProduction
			? 'x5t3kn7q7pre'
			: 'n95scxxctr3c',
		__STREAM_FEED_KEY__: isProduction
			? 'x5t3kn7q7pre'
			: 'n95scxxctr3c',
		__STREAM_FEED_ID__: isProduction
			? '65690'
			: '65263',
		__BRANCH_ID__: isProduction
			? BRANCH_PROD_ID
			: BRANCH_PROD_ID,
		__BUGSNAG_API_KEY__: '947e6a90770f931356d5966d7e209ae0',
		__APP_VERSION__: `${environment}_${Date.now()}`,
		__MEDIA_DOMAIN__: `${envDomainMap[environment]}.media.quadio.com`,
		__IMAGE_DOMAIN__: `${envDomainMap[environment]}.images.quadio.com`,
		__SEARCH_DOMAIN__: `search-${envDomainMap[environment]}.quadio.com`,
		__BANNER_DOMAIN__: `${isProduction ? '' : 'staging.'}banners.quadio.com`,
		__CLIENT_DOMAIN__: clientDomainMap[environment],
	},
	// colorConstants,
	// logoConstant,
	JSON.parse(appConstants).reduce((result, output) => {
		const outputKey = output.OutputKey
		if (includes(outputKey, stackOutputVars)) {
			return {
				[`__${constantCase(outputKey)}__`]: output.OutputValue,
				...result,
			}
		}
		return result
	}, {}),
)
