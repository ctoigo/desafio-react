import { Project } from '../types/Project';
import api from './api';

export const getProjects = async (): Promise<Project[]> => {
  try {
    const response = await api.get('/projects');
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch projects');
  }
};

export const createProject = async (newProject: Project): Promise<Project> => {
  try {
    const response = await api.post('/projects', newProject);
    return response.data;
  } catch (error) {
    throw new Error('Failed to create project');
  }
};

export const updateProject = async (projectId: number, updatedProject: Project): Promise<Project> => {
  try {
    const response = await api.put(`/projects/${projectId}`, updatedProject);
    return response.data;
  } catch (error) {
    throw new Error('Failed to update project');
  }
};

export const deleteProject = async (projectId: number): Promise<void> => {
  try {
    await api.delete(`/projects/${projectId}`);
  } catch (error) {
    throw new Error('Failed to delete project');
  }
};


export const classificarRisco = async (projetoId: number, risco: string) => {
  try {
    const response = await api.put(`/projetos/${projetoId}/classificar-risco?risco=${risco}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao classificar o risco do projeto:', error);
    throw new Error('Falha ao classificar o risco do projeto');
  }
};

export const alterarStatus = async (projetoId: number, novoStatus: string) => {
  try {
    const response = await api.put(`/projetos/${projetoId}/alterar-status?novoStatus=${novoStatus}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao alterar o status do projeto:', error);
    throw new Error('Falha ao alterar o status do projeto');
  }
};
