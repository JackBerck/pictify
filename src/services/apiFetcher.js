import axios from "axios";

const apiURL =
  "https://pixabay.com/api/?key=45763524-6140fcc900e24f09a2265e5f4";

export const fetchImages = async () => {
  try {
    const response = await axios.get(apiURL);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
