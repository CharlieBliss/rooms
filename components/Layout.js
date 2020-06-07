import Head from 'next/head'
import Link from 'next/Link'

export default function Home({ children }) {
  return (
	<div>
		<ul>
		<li>
			<Link href="/">
			Home
			</Link>
		</li>
		<li>
			<Link href="/login">
			Login
			</Link>
		</li>
		<li>
			<Link href="/discover">
				Discover
			</Link>
		</li>
		</ul>
		{children}
	</div>
  )
}
