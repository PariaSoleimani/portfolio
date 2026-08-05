'use client';

import { WORKSPACE_FILES } from '@lib/constants';
import { usePathname } from 'next/navigation';
import {
	VscChromeClose,
	VscLayoutSidebarLeft,
	VscVscode,
} from 'react-icons/vsc';

const AppHeader = () => {
	const path = usePathname();
	const file = WORKSPACE_FILES[path] || WORKSPACE_FILES['/'];

	return (
		<header className="header">
			<div className="flex items-center">
				<div className="flex items-center justify-center size-10">
					<VscVscode className="icon-lg text-pink-400" />
				</div>
				<button
					type="button"
					aria-label="Toggle Explorer"
					onClick={() =>
						window.dispatchEvent(new Event('toggle-explorer'))
					}
					className="button-icon size-10">
					<VscLayoutSidebarLeft className="icon-sm" />
				</button>
				<div className="hidden self-stretch row border-x border-zinc-800 bg-zinc-950 px-4 text-label sm:flex">
					<span className="size-2 rounded-full bg-pink-300" />
					<span>{file.filename}</span>
				</div>
			</div>
			<p className="font-medium mr-10 md:mr-24">portfolio</p>
			<button
				type="button"
				aria-label="Close Website"
				className="button-icon size-10">
				<VscChromeClose className="icon-sm" />
			</button>
		</header>
	);
};

export default AppHeader;
