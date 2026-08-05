'use client';

import { VscError, VscTerminal } from 'react-icons/vsc';

const EditorTerminal = ({ filename, error }) => {
	const hasError = Boolean(error);
	const message = error?.message;

	return (
		<div className="terminal">
			<div className="terminal-header">
				<div className="row">
					<VscTerminal className="icon-sm" />
					<span>Terminal</span>
					{hasError && <span className="terminal-badge">1</span>}
				</div>
				<span className="terminal-status">
					{hasError ? 'problems' : 'ready'}
				</span>
			</div>
			<div className="terminal-body">
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
