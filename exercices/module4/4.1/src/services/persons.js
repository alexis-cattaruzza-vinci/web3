import axios from 'axios';

const API_URL = 'http://localhost:3001/persons';

export const fetchPersons = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Re-throw the error for handling in the calling component
  }
};

export const addPerson = async (newPerson) => {
  try {
    const response = await axios.post(API_URL, newPerson);
    return response.data;
  } catch (error) {
    console.error('Error adding person:', error);
    throw error; // Re-throw the error for handling in the calling component
  }
};