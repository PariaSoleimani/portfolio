'use client';

import { useVerticalResize } from '@hooks/useVerticalResize';
import { cn } from '@lib/utils';
import { VscError, VscTerminal } from 'react-icons/vsc';

const HEADER_HEIGHT = 28;
const HANDLE_HEIGHT = 4;
const COLLAPSED_HEIGHT = HEADER_HEIGHT + HANDLE_HEIGHT;
const DEFAULT_HEIGHT = COLLAPSED_HEIGHT;
const MAX_HEIGHT = 300;

const EditorTerminal = ({ filename, error }) => {
	const { height, isCollapsed, handleProps } = useVerticalResize({
		defaultHeight: DEFAULT_HEIGHT,
		collapsedHeight: COLLAPSED_HEIGHT,
		maxHeight: MAX_HEIGHT,
	});
	const hasError = Boolean(error);
	const message = error;

	return (
		<div
			className={cn('terminal', isCollapsed && 'terminal--collapsed')}
			style={{ height }}>
			<div
				className="terminal-resize-handle"
				{...handleProps}
			/>
			<div className="terminal-header">
				<div className="row">
					<VscTerminal className="icon-sm" />
					<span>Terminal</span>
					{hasError && <span className="terminal-badge">1</span>}
				</div>
				<span className="terminal-status">
					{hasError
						? 'problems'
						: isCollapsed
							? 'collapsed'
							: 'ready'}
				</span>
			</div>
			<div
				className="terminal-body"
				aria-hidden={isCollapsed}>
				{hasError ? (
					<p className="terminal-line terminal-line--error">
						<VscError className="icon-sm shrink-0" />
						<span>{message}</span>
					</p>
				) : (
					<>
						<p className="terminal-line">
							<span className="terminal-prompt">&gt;</span>
							<span>
								Editing{' '}
								<span className="text-focused">{filename}</span>
								{' · '}
								preview synced
							</span>
						</p>
						<p className="terminal-line terminal-line--muted">
							<span className="terminal-prompt">&gt;</span>
							<span>No problems detected</span>
						</p>
					</>
				)}
			</div>
		</div>
	);
};

export default EditorTerminal;
