import axios from "axios";

const apiKey = "45763524-6140fcc900e24f09a2265e5f4"; // API Key Pixabay
const baseUrl = "https://pixabay.com/api/"; // Base URL API Pixabay

export const fetchImages = async (query = "", perPage = 20, page = 1) => {
  try {
    // response akan berisi data gambar yang diambil dari API Pixabay
    const response = await axios.get(baseUrl, {
      // params berisi query parameter yang akan dikirimkan ke API Pixabay
      params: {
        key: apiKey, // API Key
        q: query, // Query pencarian gambar
        per_page: perPage, // Jumlah gambar yang diambil per halaman
        page: page, // Menentukan halaman yang diambil
      },
    });
    // kembalikan response.data agar bisa digunakan di komponen lain
    return response.data;
  } catch (error) {
    // tangani error jika gagal mengambil data dari API
    console.error(error);
  }
};
