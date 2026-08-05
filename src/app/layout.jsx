import '@styles/globals.css';
import { Teachers } from 'next/font/google';

const teachers = Teachers({
	weight: ['400', '700'],
	fallback: ['sans-serif'],
});

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
