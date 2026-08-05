'use client';

import { typeChecker } from '@lib/constants';
import { cn } from '@lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { VscFolder, VscFolderOpened } from 'react-icons/vsc';

const FolderTree = ({ node }) => {
	const [isOpen, setIsOpen] = useState(true);
	const pathname = usePathname();
	const isActive = node?.path === pathname;

	const toggle = () => {
		if (node?.type === 'folder') {
			setIsOpen(!isOpen);
		}
	};

	if (node.type === 'folder') {
		return (
			<div className="space-y-1.5">
				<button
					type="button"
					onClick={toggle}
					aria-expanded={isOpen}
					aria-label={`${isOpen ? 'Collapse' : 'Expand'} ${node?.label}`}
					className="button-text w-full">
					{isOpen ? (
						<VscFolderOpened className="icon-sm" />
					) : (
						<VscFolder className="icon-sm" />
					)}
					<span className="text-sm md:text-base">{node?.label}</span>
				</button>

				{isOpen && node?.children && (
					<div className="space-y-1.5 pl-4">
						{node.children.map(child => (
							<FolderTree
								node={child}
								key={child.id}
							/>
						))}
					</div>
				)}
			</div>
		);
	}

	const [Icon, iconClass] = typeChecker(node?.label);

	return (
		<Link
			href={node?.path || '#'}
			className={cn(
				'button-text w-full',
				isActive && 'text-pink-300',
			)}>
			<Icon className={iconClass} />
			<span className="text-sm md:text-base">{node?.label}</span>
		</Link>
	);
};

export default FolderTree;
