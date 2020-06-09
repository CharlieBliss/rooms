import Head from 'next/head'
import Link from 'next/Link'

export default function Home({ children }) {
  return (
	<div>
		<ul>
		<li>
			<Link href="/">
			<a>
				Home
			</a>
			</Link>
		</li>
		<li>
			<Link href="/login">
			<a>
				Login
			</a>
			</Link>
		</li>
		<li>
			<Link href="/discover">
				<a>
					Discover
				</a>
			</Link>
		</li>
		<li>
			<Link href="/communities">
				<a>
					Communities
				</a>
			</Link>
		</li>
		<li>
			<Link href="/charts">
				<a>
					Charts
				</a>
			</Link>
		</li>
		<li>
			<Link href="/profiles">
				<a>
					Profiles
				</a>
			</Link>
		</li>
		</ul>
		{children}
	</div>
  )
}
