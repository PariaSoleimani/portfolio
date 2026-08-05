import AppFooter from '@components/AppFooter';
import AppHeader from '@components/AppHeader';
import Explorer from '@components/Explorer';
import Sidebar from '@components/Sidebar';
import '@styles/globals.css';
import { Teachers } from 'next/font/google';

const teachers = Teachers({
	weight: ['400', '700'],
	fallback: ['sans-serif'],
});

const siteDescription =
	'Web and Mobile developer. I build practical, responsive apps with clean code and interfaces people enjoy using.';

export const metadata = {
	metadataBase: new URL('https://www.paria.dev'),
	title: {
		default: 'Paria Soleimani | Developer',
	},
	description: siteDescription,
	keywords: [
		'Developer',
		'Front-end',
		'Back-end',
		'Mobile Development',
		'Web Development',
		'Paria Soleimani',
		'Full-stack',
		'Software Developer',
		'Coding',
	],
	authors: [{ name: 'Paria Soleimani', url: 'https://www.paria.dev' }],
	creator: 'Paria Soleimani',
	openGraph: {
		title: 'Paria Soleimani | Developer',
		description: siteDescription,
		url: 'https://www.paria.dev',
		siteName: 'Paria Soleimani | Developer',
		images: [
			{
				url: '/me.jpg',
				width: 1200,
				height: 630,
				alt: 'Paria Soleimani | Developer',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	alternates: {
		canonical: 'https://www.paria.dev',
	},
	category: 'technology',
};

const RootLayout = ({ children }) => {
	return (
		<html
			lang="en"
			dir="ltr">
			<body className={teachers.className}>
				<div className="wrapper">
					<AppHeader />
					<div className="w-full min-h-0 overflow-hidden">
						<div className="flex h-full">
							<Sidebar />
							<Explorer />
							{children}
						</div>
					</div>
					<AppFooter />
				</div>
			</body>
		</html>
	);
};

export default RootLayout;
