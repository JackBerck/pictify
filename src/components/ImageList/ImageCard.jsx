import React, { useEffect, useState } from "react";
import { fetchImages } from "../../services/apiFetcher";
import formatImageTitle from "../../utils/formatImageTitle";

export default function ImageCard() {
  const [images, setImages] = useState([]);

  // menggunakan useEffect untuk memanggil fetchImages saat komponen di-render
  useEffect(() => {
    // Memanggil fetchImages secara asinkron
    const getImages = async () => {
      // await digunakan untuk menunggu fetchImages selesai
      const data = await fetchImages();
      //   jika data dan data.hits ada, maka setImages dengan data.hits sebagai parameternya, jika tidak maka setImages dengan array kosong
      if (data && data.hits) {
        setImages(data.hits); // Menyimpan data gambar di state
      }
    };

    // Memanggil fungsi getImages
    getImages();
  }, []); // Tidak ada dependency karena hanya ingin menjalankan sekali

  return (
    <>
      {images.map((element) => (
        <a key={element.id} href={`images/${element.id}`}>
          <img
            src={element.webformatURL} // Menggunakan URL yang sesuai
            alt={formatImageTitle(element.pageURL)}
            className="w-full mb-4"
          />
        </a>
      ))}
    </>
  );
}
