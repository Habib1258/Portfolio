// src/api.js
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000/api/', // Django server URL
});

export const getProjects = async () => {
    const response = await api.get('projects/');
    return response.data;
};

export const createProject = async (project) => {
    const response = await api.post('projects/', project);
    return response.data;
};

export const updateProject = async (id, project) => {
    const response = await api.put(`projects/${id}/`, project);
    return response.data;
};

export const deleteProject = async (id) => {
    const response = await api.delete(`projects/${id}/`);
    return response.data;
};
