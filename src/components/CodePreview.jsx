'use client';

import ContactPreview from '@components/ContactPreview';
import ProjectCard from '@components/ProjectCard';
import { PERSONAL_LINKS } from '@lib/constants';

const getGridColumns = columns => {
	return (
		{
			1: 'grid-cols-1',
			2: 'grid-cols-1 md:grid-cols-2',
			3: 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3',
		}[columns] || 'grid-cols-1 md:grid-cols-2'
	);
};

const sortProjects = (projects, config) => {
	const language = config?.language?.toLowerCase();
	const filtered =
		language && language !== 'all'
			? projects.filter(
					project => project?.language?.toLowerCase() === language,
				)
			: projects;

	return filtered
		.sort((a, b) => {
			if (config?.sort === 'stars') {
				return b.stargazers_count - a.stargazers_count;
			}
			if (config?.sort === 'updated') {
				return new Date(b.updated_at) - new Date(a.updated_at);
			}
			return 0;
		})

		.slice(0, config?.limit);
};

const CodePreview = ({ path, data, projects = [], fetchError = null }) => {
	const selectedProjects = sortProjects(projects, data);
	const gridColumns = getGridColumns(data?.columns);

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

	if (path === '/contact') {
		return (
			<div className="preview-canvas">
				<ContactPreview css={data} />
			</div>
		);
	}

	if (fetchError) {
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

	return (
		<div className="preview-canvas">
			<div className="preview-stack">
				<h2>My Projects</h2>
				<p className="text-description">
					A collection of recent work, experiments, and things I am
					learning by building.
				</p>
				<p className="text-muted">
					Showing {selectedProjects.length} project
					{selectedProjects.length === 1 ? '' : 's'}.
				</p>
			</div>

			<div className={`preview-block grid gap-4 ${gridColumns}`}>
				{selectedProjects.map(project => (
					<ProjectCard
						key={project.id}
						{...project}
						showDescription={data?.showDescription}
						showTopics={data?.showTopics}
					/>
				))}
			</div>
		</div>
	);
};

export default CodePreview;
