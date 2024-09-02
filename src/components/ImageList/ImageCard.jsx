import React, { useEffect, useState } from "react";
import { fetchImages } from "./apiFetcher";

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

  // function untuk mengubah URL gambar menjadi judul yang lebih mudah dibaca
  function formatImageTitle(url) {
    // Menggunakan regex yang lebih fleksibel untuk menangkap kategori apapun sebelum ID
    const regex = /\/(?:photos|illustrations|images)\/(.*?)\-\d+\//;
    const match = url.match(regex);

    // jika match ditemukan, maka ambil kategori tersebut
    if (match) {
      let title = match[1];

      // Mengubah '-' menjadi ' ' dan membuat string menjadi sentence case
      title = title.replace(/-/g, " ");
      title = title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();

      return title;
    } else {
      // kemungkinan URL tidak sesuai dengan format yang diharapkan
      return "I think this item doesn't have a title 🤔";
    }
  }

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
