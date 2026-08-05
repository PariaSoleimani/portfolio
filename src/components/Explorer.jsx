'use client';

import FolderTree from '@components/FolderTree';
import { EXPLORER_CONTENT } from '@lib/constants';
import { cn } from '@lib/utils';
import { useEffect, useState } from 'react';

const Explorer = () => {
	const [hidden, setHidden] = useState(true);

	useEffect(() => {
		const toggle = () => setHidden(value => !value);

		const handleKeyDown = e => {
			if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'b') {
				e.preventDefault();
				toggle();
			}
		};
		window.addEventListener('keydown', handleKeyDown);
		window.addEventListener('toggle-explorer', toggle);
		return () => {
			window.removeEventListener('keydown', handleKeyDown);
			window.removeEventListener('toggle-explorer', toggle);
		};
	}, []);

	return (
		<aside className={cn('explorer', hidden && 'hidden')}>
			{EXPLORER_CONTENT.map(node => (
				<FolderTree
					key={node.id}
					node={node}
				/>
			))}
		</aside>
	);
};

export default Explorer;
