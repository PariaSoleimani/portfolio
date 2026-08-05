'use client';

import CodeEditor from '@components/CodeEditor';
import { useWorkspaceEditor } from '@hooks/useWorkspaceEditor';
import { cn } from '@lib/utils';
import { useState } from 'react';
import { VscChevronLeft, VscChevronRight } from 'react-icons/vsc';

const Workspace = ({ path, projects, fetchError = null }) => {
	const {
		source,
		fileName,
		language,
		updateSource,
		resetSource,
		error,
		isModified,
	} = useWorkspaceEditor(path);
	const [editorOpen, setEditorOpen] = useState(true);

	return (
		<div className="workspace">
			<div className="workspace-header">
				<span>EDITOR</span>
				<div className="row-group">
					<button
						type="button"
						onClick={() => setEditorOpen(isOpen => !isOpen)}
						aria-label={
							editorOpen ? 'Collapse editor' : 'Show editor'
						}
						className="button-text hover:text-pink-300">
						{editorOpen ? <VscChevronLeft /> : <VscChevronRight />}
						<span>
							{editorOpen ? 'Collapse editor' : 'Show editor'}
						</span>
					</button>
				</div>
			</div>
			<div
				className={cn(
					'workspace-grid',
					editorOpen ? '' : 'editor-closed',
				)}>
				{editorOpen && (
					<CodeEditor
						filename={fileName}
						language={language}
						source={source}
						onChange={updateSource}
						onReset={resetSource}
						isModified={isModified}
						error={error}
					/>
				)}
				<section className="preview">
					<div className="panel-header">
						<span className="text-label">Preview</span>
						<p className="row text-overline text-emerald-400">
							<span className="status-dot animate-ping bg-emerald-400" />
							<span>running</span>
						</p>
					</div>
					<div className="preview-main"></div>
				</section>
			</div>
		</div>
	);
};

export default Workspace;
