export const highlightSource = source => {
	const regexPattern =
		/(\/\*[\d\D]*?\*\/)|("(?:\\.|[^"\\])*")(?=\s*:)|("(?:\\.|[^"\\])*")|(--[\w-]+)(?=\s*:)|(\b(?:true|false|null)\b)|(-?\b\d+(?:\.\d+)?\b)|([{}[\],:;])/g;
	const result = [];
	let lastIndex = 0;
	let match = regexPattern.exec(source);

	while (match) {
		result.push(source?.slice(lastIndex, match.index));
		const className = match[1]
			? 'syntax-comment'
			: match[2] || match[4]
				? 'syntax-key'
				: match[3]
					? 'syntax-string'
					: match[5] || match[6]
						? 'syntax-value'
						: 'syntax-punctuation';

		result.push(
			<span
				className={className}
				key={match.index}>
				{match[0]}
			</span>,
		);

		lastIndex = regexPattern.lastIndex;
		match = regexPattern.exec(source);
	}

	result.push(source?.slice(lastIndex));
	return result;
};

const isObject = value =>
	value && typeof value === 'object' && !Array.isArray(value);

export const parseSource = (path, source) => {
	if (path === '/contact') {
		return {
			value: source
				.replace(/@import[^;]+;|url\([^)]*\)/gi, '')
				.replaceAll('<', '\\3c '),
			error: null,
		};
	}

	try {
		const value = JSON.parse(source);
		if (!isObject(value)) {
			throw new Error('The editor expects a JSON object.');
		}

		if (path === '/about') {
			if (!Array.isArray(value?.skills)) {
				throw new Error('"skills" must be an array of strings.');
			}
			if (value?.skills.length === 0) {
				throw new Error('"skills" must include at least one skill.');
			}
			if (value?.skills.length > 12) {
				throw new Error('"skills" can have at most 12 items.');
			}
			value.skills = value?.skills.map((skill, index) => {
				if (typeof skill !== 'string' || !skill.trim()) {
					throw new Error(
						`"skills[${index}]" must be a non-empty string.`,
					);
				}
				return skill.trim();
			});
		}

		if (path === '/projects') {
			const limit = Number(value?.limit);
			if (!Number.isInteger(limit) || limit < 1 || limit > 20) {
				throw new Error(
					'"limit" must be a whole number between 1 and 20.',
				);
			}
			if (!['updated', 'stars'].includes(value?.sort)) {
				throw new Error('"sort" must be "updated" or "stars".');
			}
			if (typeof value?.language !== 'string' || !value.language.trim()) {
				throw new Error('"language" must be a language name or "all".');
			}
			if (![1, 2, 3].includes(value.columns)) {
				throw new Error('"columns" must be 1, 2, or 3.');
			}
			if (
				typeof value.showDescription !== 'boolean' ||
				typeof value.showTopics !== 'boolean'
			) {
				throw new Error(
					'"showDescription" and "showTopics" must be true or false.',
				);
			}
		}

		return { value, error: null };
	} catch (error) {
		return {
			value: null,
			error: error.message,
		};
	}
};
