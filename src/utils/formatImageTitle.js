// function untuk mengubah URL gambar menjadi judul yang lebih mudah dibaca
export default function formatImageTitle(url) {
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
