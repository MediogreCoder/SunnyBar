import api from "./apiConfig";

export const getAll = async () => {
  try {
    const response = await api.get("/");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getProfileCity = async (City) => {
  try {
    const response = await api.get(`/cityname/${City}`);
    return response.data.City;
  } catch (error) {
    throw error;
  }
};

export const getProfileSunlight = async (City) => {
  try {
    const response = await api.get(`/cityname/${City}`);
    return response.data.Year;
  } catch (error) {
    throw error;
  }
};

export const getUser = async (name) => {
  try {
    const response = await api.get(`/user/${name}`);
    return response.data.name;
  } catch (error) {
    throw error;
  }
};

export const getUserCity = async (name) => {
  try {
    const response = await api.get(`/user/${name}`);
    return response.data.city;
  } catch (error) {
    throw error;
  }
};


export const registerUser = async (user) => {
  try {
    const response = await api.post("/user", user);
    return response.data;
  } catch (error) {
    throw error;
  }
};
