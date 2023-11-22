import React, { useEffect, useState } from "react";
import { getProjects, deleteProject } from "../../services/projectService";
import { Project } from "../../types/Project";

const ProjectList: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const projectsData = await getProjects();
        setProjects(projectsData);
      } catch (error) {
        console.error("Error fetching projects:", (error as Error).message);
      }
    };

    fetchData();
  }, []);

  const handleDeleteProject = async (projectId: number) => {
    try {
      await deleteProject(projectId);
      setProjects((prevProjects) =>
        prevProjects.filter((project) => project.id !== projectId)
      );
    } catch (error) {
      console.error("Error deleting project:", (error as Error).message);
    }
  };

  return (
    <div>
      <h2>Project List</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            {project.nome} - {project.status}
            <button
              onClick={() =>
                project.id !== undefined && handleDeleteProject(project.id)
              }
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
