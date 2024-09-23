import axios from "axios";

// const API = "https://66e526db5cc7f9b6273c6acb.mockapi.io";
const API = "https://66e526db5cc7f9b6273c6acb.mockapi.io";

const getProjects = () => axios.get(`${API}/projects`);
const getProjectsById = (id) => axios.get(`${API}/projects/${id}`);
const postProjectData = (data) => axios.post(`${API}/projects`, data);
const putProjectData = (data, id) => axios.put(`${API}/projects/${id}`, data);
const deleteProjectData = (id) => axios.delete(`${API}/projects/${id}`);

export {
  getProjects,
  getProjectsById,
  postProjectData,
  putProjectData,
  deleteProjectData,
};
