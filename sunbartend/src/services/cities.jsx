import api from "./apiConfig";


export const getAll = async () => {
  try {
    const response = await api.get("/sunlights");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAllUsers = async () => {
  try {
    const response = await api.get("/team/users");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getProfileCity = async (City) => {
  try {
    const response = await api.get(`/sunlights/city/${City}`);
    return response.data.City;
  } catch (error) {
    throw error;
  }
};

export const getProfileSunlight = async (City) => {
  try {
    const response = await api.get(`/sunlights/city/${City}`);
    return response.data.Year;
  } catch (error) {
    throw error;
  }
};

export const getUser = async (name) => {
  try {
    const response = await api.get(`/users/${name}`);
    return response.data.name;
  } catch (error) {
    throw error;
  }
};

export const getUserCity = async (name) => {
  try {
    const response = await api.get(`/users/name/${name}`);
    return response.data.city;
  } catch (error) {
    throw error;
  }
};

export const getUserName = async (name) => {
  try {
    const response = await api.get(`/users/name/${name}`);
    return response.data.name;
  } catch (error) {
    throw error;
  }
};

export const getUserPassword = async (name) => {
  try {
    const response = await api.get(`/users/name/${name}`);
    return response.data.password;
  } catch (error) {
    throw error;
  }
};


export const registerUser = async (account) => {
  try {
    const response = await api.post("/users", account);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getUserID = async (name) => {
  try {
    const response = await api.get(`/users/name/${name}`);
    return response.data._id;
  } catch (error) {
    throw error;
  }
};

export const deleteUser = async (id) => {
  try {
    const response = await api.delete(`/users/${id}`);
    return response.data.id;
  } catch (error) {
    throw error;
  }
};
