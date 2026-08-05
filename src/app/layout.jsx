import '@styles/globals.css';
import { Teachers } from 'next/font/google';

const teachers = Teachers({
	weight: ['400', '700'],
	fallback: ['sans-serif'],
});

export const metadata = {
	metadataBase: new URL('https://www.paria.dev'),
	title: {
		default: 'Paria Soleimani | Developer',
	},
	description: 'Paria Soleimani | Developer',
	keywords: [
		'Developer',
		'Front-end',
		'Paria Soleimani',
		'Full-stack',
		'Software Developer',
		'Product Designer',
		'Coding',
	],
	authors: [{ name: 'Paria Soleimani', url: 'https://www.paria.dev' }],
	creator: 'Paria Soleimani',
	openGraph: {
		title: 'Paria Soleimani | Developer',
		description:
			'A Next.js app styled with the Lato Google Font. Built for speed, beauty, and modern performance.',
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
				{children}
			</body>
		</html>
	);
};

export default RootLayout;
