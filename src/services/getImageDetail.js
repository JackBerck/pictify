import axios from "axios";

export default async function getImageDetail(id) {
  const apiURL = `https://pixabay.com/api/?key=45763524-6140fcc900e24f09a2265e5f4&id=${id}`;
  try {
    const response = await axios.get(apiURL);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
