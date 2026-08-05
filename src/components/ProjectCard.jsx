import { VscChevronRight, VscStarFull } from 'react-icons/vsc';

const ProjectCard = ({
	html_url: link,
	name,
	description,
	topics = [],
	language,
	stargazers_count: stars = 0,
	showDescription = true,
	showTopics = true,
}) => {
	const content = (
		<>
			<div className="flex items-center justify-between gap-3">
				<span className="row text-mono uppercase tracking-wider">
					<span className="status-dot bg-pink-300/80" />
					{language || 'Code'}
				</span>
				<span className="row font-mono text-[0.65rem] text-zinc-600">
					<VscStarFull className="size-3" />
					{stars}
				</span>
			</div>

			<div className="mt-3 flex min-h-0 flex-1 flex-col">
				<p className="project-card__title capitalize">
					{name}
				</p>

				{showDescription && (
					<p className="project-card__description">
						{description || 'An experiment built to learn and explore.'}
					</p>
				)}

				{showTopics && topics.length > 0 && (
					<p className="mt-3 font-mono text-xs leading-5 text-zinc-600">
						{topics.map((topic, index) => (
							<span key={topic}>
								{index > 0 && (
									<span className="mx-1.5 text-zinc-700">·</span>
								)}
								#{topic}
							</span>
						))}
					</p>
				)}
			</div>

			{link && (
				<span className="project-card__link">
					View repo
					<VscChevronRight className="size-3.5" />
				</span>
			)}
		</>
	);

	if (!link) {
		return <article className="project-card">{content}</article>;
	}

	return (
		<a
			href={link}
			target="_blank"
			rel="noreferrer noopener"
			className="project-card group">
			{content}
		</a>
	);
};

export default ProjectCard;
