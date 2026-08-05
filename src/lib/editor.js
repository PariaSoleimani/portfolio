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
