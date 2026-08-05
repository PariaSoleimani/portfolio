'use client';

import { PERSONAL_LINKS } from '@lib/constants';

const CodePreview = ({ path, data, fetchFailed }) => {
	if (path === '/') {
		return (
			<div className="preview-canvas flex items-center">
				<div className="preview-stack">
					<p className="text-mono">Hello, I&apos;m</p>
					<h1>{data?.name || 'Your name'}</h1>
					<h3 className="text-zinc-200">
						{data?.role || 'Your role'}
					</h3>
					<p className="text-description">{data?.bio}</p>
					<button
						type="button"
						className="button-primary mt-5">
						{data?.cta || 'CTA'}
					</button>
				</div>
			</div>
		);
	}

	if (path === '/about') {
		return (
			<div className="preview-canvas">
				<div className="preview-stack">
					<h2>About me</h2>
					<p className="text-description text-zinc-300">
						Based in{' '}
						<span className="text-focused">{data?.location}</span>,{' '}
						with {data?.experience}.
					</p>
					<p className="text-description">{data?.intro}</p>
					<p className="text-description">{data?.focus}</p>
					{data?.skills?.length > 0 && (
						<div className="preview-block flex max-w-lg flex-wrap gap-3">
							{data.skills.map((skill, index) => (
								<p
									key={index}
									className="text-muted">
									<span>{skill}</span>
								</p>
							))}
						</div>
					)}
				</div>
			</div>
		);
	}

	if (fetchFailed) {
		return (
			<div className="preview-canvas flex items-center">
				<div className="preview-stack">
					<h2>GitHub is taking a break.</h2>
					<p className="text-description">
						The live repository feed is temporarily unavailable. The
						latest work is still available directly on GitHub.
					</p>
					<a
						href={PERSONAL_LINKS?.github?.href}
						target="_blank"
						rel="noreferrer noopener"
						className="button-primary mt-5">
						Open GitHub profile
					</a>
				</div>
			</div>
		);
	}
};

export default CodePreview;
