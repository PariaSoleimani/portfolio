import Workspace from '@components/Workspace';

export const revalidate = 86400;

const ProjectsPage = async () => {
	let projects = [];
	let error = null;

	const response = await fetch(process.env.GITHUB_API_URL, {
		headers: { Accept: 'application/vnd.github+json' },
		next: { revalidate },
	});

	if (!response.ok) {
		error = `GitHub returned ${response.status}`;
	} else {
		projects = await response.json();
	}

	return (
		<Workspace
			path="/projects"
			projects={projects}
			fetchError={error}
		/>
	);
};

export default ProjectsPage;
