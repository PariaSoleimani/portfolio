'use client';

import { highlightSource } from '@lib/editor';
import { useMemo, useRef } from 'react';
import { VscDiscard } from 'react-icons/vsc';

const CodeEditor = ({
	filename,
	language,
	source,
	onChange,
	onReset,
	isModified,
	error,
}) => {
	const textareaRef = useRef(null);
	const highlightRef = useRef(null);
	const lineCount = source?.split('\n').length;
	const lineNumbers = Array.from(
		{ length: lineCount },
		(_, number) => number + 1,
	);

	const highlightedSource = useMemo(() => highlightSource(source), [source]);

	const syncScroll = event => {
		if (highlightRef.current) {
			highlightRef.current.scrollTop = event.currentTarget.scrollTop;
			highlightRef.current.scrollLeft = event.currentTarget.scrollLeft;
		}
	};

	return (
		<section className="editor">
			<div className="panel-header border-t md:border-t-0">
				<span className="row text-label">
					{isModified && <span className="status-dot bg-pink-300" />}
					{filename}
				</span>
				<div className="row-group">
					<span className="text-overline text-zinc-500">
						{language}
					</span>
					<button
						type="button"
						onClick={() => onReset()}
						className="button-text hover:text-pink-300"
						aria-label={`Reset ${filename}`}>
						<VscDiscard className="icon-sm" />
						<span className="text-xs">Reset</span>
					</button>
				</div>
			</div>
			<div className="editor-body">
				<div className="editor-main">
					<ol
						className="editor-gutter"
						aria-hidden="true">
						{lineNumbers.map(lineNumber => (
							<li key={lineNumber}>{lineNumber}</li>
						))}
					</ol>
					<div className="editor-code">
						<pre
							ref={highlightRef}
							aria-hidden="true"
							className="editor-highlight">
							{highlightedSource}
						</pre>
						<textarea
							ref={textareaRef}
							value={source}
							onChange={event => onChange(event.target.value)}
							onScroll={syncScroll}
							spellCheck="false"
							className="editor-textarea"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CodeEditor;
