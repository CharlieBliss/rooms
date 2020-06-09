/** @jsx jsx */
import { useContext, memo, Profiler } from 'react'
import times from 'ramda/src/times'
import { css, jsx } from '@emotion/core'
import emoStyled from '@emotion/styled'
import styled from 'styled-components'
import { createUseStyles } from "react-jss";

import map from 'ramda/src/map'
import { useQuery, queryCache } from 'react-query'
import apiRequest from 'api/apiRequest'
import Head from 'next/head'
import Link from 'next/Link'
import { currentAwsToken } from 'auth/awsAmplify'
import { AuthContext } from 'pages/_app'


const createStyles = (id) => {
	const colors = ['papayawhip', 'cadetblue', 'lightcoral', 'darkseagreen']
	const color = colors[id % 4]
	return ({
		padding: '0.5em',
		margin: '0.5em',
		color: `RGB(${id % 240}, ${id % 23}, ${id % 20})`,
		backgroundColor: color,
		border: 'none',
		borderRadius: '3px',
	})
}


const Profiles = () => {
	const { authenticated } = useContext(AuthContext)
	const { status, data, error } = useQuery(
		'profiles',
		apiRequest({path: 'profiles'}),
		{
			initialData: queryCache.getQueryData('profiles'),
			refetchOnWindowFocus: false,
		}
	)
	if(authenticated) {
		return (
			<div>
				<div>
					Hello, this is the community page. You need to be authenticated to see me.
				</div>
				<ul>
					{
						data?.results.map(
							item => (
								<Link href={`profiles/${item.id}`}key={item.id}>
									<a>
										<li
											css={createStyles(item.id)}
										>
											{item.name}
										</li>
									</a>
								</Link>
							)
						)
					}
				</ul>
			</div>
		)
	}
	return (
		<div>
			Warning you are banned
		</div>
	)
}

export default Profiles
