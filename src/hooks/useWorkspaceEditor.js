'use client';

import { WORKSPACE_FILES } from '@lib/constants';
import { parseSource } from '@lib/editor';
import { useCallback, useState } from 'react';

export const useWorkspaceEditor = path => {
	const file = WORKSPACE_FILES[path] || WORKSPACE_FILES['/'];
	const fileName = file?.filename;
	const language = file?.language;
	const parsedSource = parseSource(path, file?.source);
	const [previewData, setPreviewData] = useState(parsedSource?.value);
	const [source, setSource] = useState(file?.source);
	const [isModified, setIsModified] = useState(false);
	const [error, setError] = useState(null);

	const updateSource = useCallback(
		nextSource => {
			setSource(nextSource);
			setIsModified(nextSource !== file?.source);
			const parsed = parseSource(path, nextSource);
			if (!parsed?.error) {
				setPreviewData(parsed?.value);
			}
			setError(parsed?.error);
		},
		[file?.source, path],
	);

	const resetSource = useCallback(
		() => updateSource(file?.source),
		[file?.source, updateSource],
	);

	return {
		source,
		fileName,
		language,
		previewData,
		updateSource,
		resetSource,
		error,
		isModified,
	};
};
