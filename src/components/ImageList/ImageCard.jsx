import React, { useEffect, useState } from "react";
import { fetchImages } from "../../services/apiFetcher";
import formatImageTitle from "../../utils/formatImageTitle";

export default function ImageCard({ searchResult }) {
  const [images, setImages] = useState([]); // State untuk menyimpan data gambar
  const [page, setPage] = useState(1); // State untuk menyimpan halaman
  const [hasMore, setHasMore] = useState(true); // State untuk menandakan apakah masih ada gambar yang bisa diambil
  const [isLoading, setIsLoading] = useState(false); // State untuk menandakan status loading

  // Mengambil data gambar dari API
  const loadImages = async () => {
    setIsLoading(true); // Menandakan bahwa aplikasi sedang melakukan fetch data

    const data = await fetchImages("", 20, page); // Mengambil data gambar dari API

    if (data && data.hits.length > 0) {
      setImages((prevImages) => [...prevImages, ...data.hits]); // Menambahkan data gambar ke state images

      if (data.totalHits <= images.length + data.hits.length) {
        setHasMore(false); // Menandakan bahwa tidak ada gambar lagi yang bisa diambil
      }
    } else {
      setHasMore(false); // Menandakan bahwa tidak ada gambar lagi yang bisa diambil
    }

    setIsLoading(false); // Menandakan bahwa fetch data sudah selesai
  };

  // useEffect akan dipanggil saat pertama kali komponen di-render atau ketika 'page' berubah
  useEffect(() => {
    if (searchResult.length > 0) {
      // Jika ada hasil pencarian, gunakan hasil pencarian
      setImages(searchResult);
      setHasMore(false); // Tidak perlu memuat lebih banyak gambar jika ada hasil pencarian
    } else {
      loadImages(); // Memanggil fungsi loadImages
    }
  }, [page, searchResult]); // Menambahkan dependency pada page dan searchResult

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      if (!isLoading && hasMore) {
        setPage((prevPage) => prevPage + 1); // Naikkan halaman untuk memuat gambar berikutnya
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading, hasMore]);

  // Menghapus daftar jika id gambar sudah ada
  const filteredImages = images.filter(
    (image, index, self) => index === self.findIndex((t) => t.id === image.id)
  );

  return (
    <>
      {filteredImages.map((element) => (
        <a key={element.id} href={`images/${element.id}`}>
          <img
            src={element.webformatURL}
            alt={formatImageTitle(element.pageURL)}
            className="w-full mb-4"
          />
        </a>
      ))}
      {isLoading && <p>Loading...</p>}
    </>
  );
}
