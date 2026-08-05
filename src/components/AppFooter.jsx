'use client';

import { PERSONAL_LINKS, WORKSPACE_FILES } from '@lib/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { VscJson, VscRemote, VscSourceControl } from 'react-icons/vsc';

const AppFooter = () => {
	const path = usePathname();
	const file = WORKSPACE_FILES[path] || WORKSPACE_FILES['/'];

	return (
		<footer className="footer">
			<div className="row-group">
				<Link
					href={PERSONAL_LINKS?.github?.href || '#'}
					target="_blank"
					rel="noreferrer noopener"
					className="button-text">
					<VscRemote className="icon-sm text-pink-400" />
					<VscSourceControl className="icon-sm" />
					<span className="text-ui">main</span>
				</Link>
			</div>

			<p className="hidden font-mono text-xs md:block">
				Tab adds indentation · Ctrl/Cmd + B toggles Explorer
			</p>

			<div className="row-group">
				<div className="button-text md:hidden">
					<VscJson className="icon-sm text-pink-400" />
					<span className="text-ui">{file.filename}</span>
				</div>
				<div className="button-text">
					<span className="text-ui">Live preview</span>
				</div>
			</div>
		</footer>
	);
};

export default AppFooter;
