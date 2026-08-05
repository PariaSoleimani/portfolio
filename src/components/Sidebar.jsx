'use client';

import { SIDEBAR_BOTTOM_MENU, SIDEBAR_TOP_MENU } from '@lib/constants';
import { cn } from '@lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
	const pathname = usePathname();

	return (
		<aside className="sidebar">
			<ul>
				{SIDEBAR_TOP_MENU.map(({ icon, label, path }) => {
					const isActive = pathname === path;
					const Icon = icon;

					return (
						<li
							key={path}
							className="relative">
							<span
								className={cn(
									'h-full absolute left-0 w-1 rounded-r bg-transparent',
									isActive && 'bg-pink-300',
								)}
							/>
							<Link
								href={path}
								aria-label={label}
								className="button-icon size-12 md:size-13">
								<Icon className="icon-lg" />
							</Link>
						</li>
					);
				})}
			</ul>

			<ul>
				{SIDEBAR_BOTTOM_MENU.map(({ icon, label, path }) => {
					const isActive = pathname === path;
					const Icon = icon;

					return (
						<li
							key={path}
							className="relative">
							<span
								className={cn(
									'h-full absolute left-0 w-1 rounded-r bg-transparent',
									isActive && 'bg-pink-300',
								)}
							/>
							<Link
								href={path}
								aria-label={label}
								className="button-icon size-12 md:size-13">
								<Icon className="icon-lg" />
							</Link>
						</li>
					);
				})}
			</ul>
		</aside>
	);
};

export default Sidebar;
