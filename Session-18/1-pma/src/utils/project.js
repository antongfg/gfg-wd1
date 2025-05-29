function getProjectWithReports(projectId, projectsData, reportsData) {
  const project = projectsData.find(
    (project) => project.id === Number(projectId)
  );

  if (!project) {
    return {
      error: `Project with ID ${projectId} not found.`,
    };
  }

  const relatedReports = reportsData.filter((report) =>
    report.relatedProjectIds.includes(Number(projectId))
  );

  return {
    project,
    relatedReports,
  };
}

export { getProjectWithReports };
