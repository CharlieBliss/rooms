/** @jsx jsx */
import { useContext } from 'react'
import { jsx } from '@emotion/core'
import Link from 'next/Link'
import { AuthContext } from 'pages/_app'
import useFetchList from 'api/useFetchList'


const createStyles = (id) => ({
	padding: '0.5em',
	margin: '0.5em',
	color: `RGB(${id % 256}, 200, 200)`,
	background: 'papayawhip',
	border: 'none',
	borderRadius: '3px',
})


const Discover = () => {
	const { authenticated } = useContext(AuthContext)
	const { status, data, error } = useFetchList('tracks')
	if(authenticated) {
		return (
			<div>
				<div>
					Hello, this is the discover page. You need to be authenticated to see me.
				</div>
				<ul>
					{
						data?.map(
							item => (
								<Link href="tracks/[id]" as={`tracks/${item.id}`} key={item.id}>
									<a>
										<li
											css={createStyles(item.id)}
										>
											{item.title}
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
			Warnign you are banned
		</div>
	)
}

export default Discover
