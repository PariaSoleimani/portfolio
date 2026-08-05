import { BiLogoMarkdown } from 'react-icons/bi';
import { FaHtml5, FaJsSquare, FaReact } from 'react-icons/fa';
import { LuFileJson } from 'react-icons/lu';
import { RiTailwindCssFill } from 'react-icons/ri';
import {
	VscAccount,
	VscFiles,
	VscLink,
	VscMail,
	VscSearch,
	VscSourceControl,
} from 'react-icons/vsc';

export const SIDEBAR_TOP_MENU = [
	{ icon: VscFiles, label: 'Home', path: '/' },
	{ icon: VscSourceControl, label: 'Projects', path: '/projects' },
	{ icon: VscSearch, label: 'Contact', path: '/contact' },
];

export const SIDEBAR_BOTTOM_MENU = [
	{ icon: VscAccount, label: 'About', path: '/about' },
];

const FILE_TYPES = [
	{
		name: 'css',
		icon: RiTailwindCssFill,
		className: 'icon-sm text-blue-400',
	},
	{ name: 'js', icon: FaJsSquare, className: 'icon-sm text-yellow-500' },
	{ name: 'jsx', icon: FaReact, className: 'icon-sm text-sky-400' },
	{ name: 'json', icon: LuFileJson, className: 'icon-sm text-amber-300' },
	{ name: 'md', icon: BiLogoMarkdown, className: 'icon-sm text-neutral-400' },
	{ name: 'html', icon: FaHtml5, className: 'icon-sm text-orange-600' },
];

export const typeChecker = name => {
	const ext = name.split('.').pop();
	const match = FILE_TYPES.find(file => file.name === ext);

	return match
		? [match?.icon, match?.className]
		: [LuFileJson, 'size-3 text-zinc-500'];
};

export const EXPLORER_CONTENT = [
	{
		id: 1,
		label: 'src',
		type: 'folder',
		children: [
			{ id: 2, label: 'home.json', type: 'file', path: '/' },
			{
				id: 3,
				label: 'bio',
				type: 'folder',
				children: [
					{
						id: 4,
						label: 'about.json',
						type: 'file',
						path: '/about',
					},
				],
			},
			{
				id: 5,
				label: 'portfolio',
				type: 'folder',
				children: [
					{
						id: 6,
						label: 'projects.json',
						type: 'file',
						path: '/projects',
					},
				],
			},
			{
				id: 7,
				label: 'contact',
				type: 'folder',
				children: [
					{
						id: 8,
						label: 'contact.css',
						type: 'file',
						path: '/contact',
					},
				],
			},
		],
	},
];

export const PERSONAL_LINKS = {
	github: {
		icon: VscSourceControl,
		label: 'GitHub',
		href: 'https://github.com/pariasoleimani',
		value: 'take a look at my work',
	},
	email: {
		icon: VscMail,
		label: 'Email',
		href: 'mailto:paria.slmni@gmail.com',
		value: 'paria.slmni@gmail.com',
	},
	linkedin: {
		icon: VscLink,
		label: 'LinkedIn',
		href: 'https://linkedin.com/in/pariasoleimani',
		value: 'connect with me',
	},
};
