import React, { useState } from "react";
import { createProject } from "../../services/projectService";
import { Project } from "../../types/Project";

const ProjectForm: React.FC = () => {
  const [projectData, setProjectData] = useState<Project>({
    nome: "",
    dataInicio: "",
    dataPrevisaoFim: "",
    dataFim: "",
    descricao: "",
    status: "",
    orcamento: 0,
    risco: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProjectData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createProject(projectData);
      setProjectData({
        nome: "",
        dataInicio: "",
        dataPrevisaoFim: "",
        dataFim: "",
        descricao: "",
        status: "",
        orcamento: 0,
        risco: "",
      });
    } catch (error) {
      console.error("Error creating project:", (error as Error).message);
    }
  };

  return (
    <div>
      <h2>Add Project</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={projectData.nome}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Start Date:
          <input
            type="text"
            name="dataInicio"
            value={projectData.dataInicio}
            onChange={handleChange}
            required
          />
        </label>
        {/* Add other input fields as needed */}
        <button type="submit">Add Project</button>
      </form>
    </div>
  );
};

export default ProjectForm;
