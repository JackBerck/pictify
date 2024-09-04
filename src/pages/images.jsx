import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import getImageDetail from "../services/getImageDetail";
import formatImageTitle from "../utils/formatImageTitle";

export default function ImageDetailPage() {
  const id = useParams().id;
  const [image, setImage] = useState({});

  useEffect(() => {
    getImageDetail(id).then((data) => setImage(data.hits[0]));
  }, [id]);

  const imageTitle = image.pageURL
    ? formatImageTitle(image.pageURL)
    : "Loading...";

  console.log(image);

  return (
    <div className="section-padding-x pt-16 pb-16 text-dark-base">
      <div className="container max-w-screen-md bg-slate-200 p-4 md:p-8 rounded-3xl shadow-xl">
        <h2 className="header-font-size font-black mb-4 capitalize">
          {imageTitle}
        </h2>
        {image.largeImageURL && (
          <img
            src={image.largeImageURL}
            alt={imageTitle}
            className="mb-4 rounded-3xl max-h-[512px]"
          />
        )}
        <p className="normal-font-size font-semibold">
          Type{" "}
          <span className="bg-dark-base text-white-base small-font-size mb-4 inline-block py-1 px-2 rounded-lg">
            {image.type}
          </span>
        </p>
        <p className="normal-font-size font-semibold mb-4 inline-block">
          Tags{" "}
          {image.tags &&
            image.tags
              .split(",")
              .map((tag, index) => (
                <span className="bg-dark-base text-white-base small-font-size py-1 px-2 rounded-lg mr-2">
                  {image.tags.split(",")[index]}
                </span>
              ))}
        </p>
        <div className="flex gap-2 md:gap-4 flex-wrap mb-4">
          <p className="normal-font-size font-semibold" title="Views">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              className="w-6 inline-block"
            >
              <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
            </svg>{" "}
            <span className="small-font-size inline-block py-1 px-2 rounded-lg">
              {image.views}
            </span>
          </p>
          <p className="normal-font-size font-semibold" title="Downloads">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-6 inline-block"
            >
              <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
            </svg>{" "}
            <span className="small-font-size inline-block py-1 px-2 rounded-lg">
              {image.downloads}
            </span>
          </p>
          <p className="normal-font-size font-semibold" title="Collections">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="w-6 inline-block"
            >
              <path d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
            </svg>{" "}
            <span className="small-font-size inline-block py-1 px-2 rounded-lg">
              {image.collections}
            </span>
          </p>
          <p className="normal-font-size font-semibold" title="Collections">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-6 inline-block"
            >
              <path d="M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 18.5-10.5 34.6-25.9 42.6C497 275.4 504 288.9 504 304c0 23.4-16.8 42.9-38.9 47.1c4.4 7.3 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z" />
            </svg>{" "}
            <span className="small-font-size inline-block py-1 px-2 rounded-lg">
              {image.likes}
            </span>
          </p>
          <p className="normal-font-size font-semibold" title="Collections">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-6 inline-block"
            >
              <path d="M256 448c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9c-5.5 9.2-11.1 16.6-15.2 21.6c-2.1 2.5-3.7 4.4-4.9 5.7c-.6 .6-1 1.1-1.3 1.4l-.3 .3 0 0 0 0 0 0 0 0c-4.6 4.6-5.9 11.4-3.4 17.4c2.5 6 8.3 9.9 14.8 9.9c28.7 0 57.6-8.9 81.6-19.3c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9zM128 208a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm128 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm96 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
            </svg>{" "}
            <span className="small-font-size inline-block py-1 px-2 rounded-lg">
              {image.comments}
            </span>
          </p>
        </div>
        <a
          href={image.largeImageURL}
          className="normal-font-size font-bold rounded-xl bg-dark-base text-white-base py-2 px-4 hover:bg-dark-base/90"
          download
        >
          Download
        </a>
      </div>
    </div>
  );
}

/*
Eyes icon for view:
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --><path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z"/></svg>

Download icon for download:
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --><path d="M512 320h-96v128H160V320H64L288 96l224 224zm-96-192c0-35.3-28.7-64-64-64H224v96h128V128h-64c-17.7 0-32 14.3-32 32v32h128v64 64h-128v32c0 17.7 14.3 32 32 32h64v96h-128v-96H160c-35.3 0-64-28.7-64-64v-32H64v-64h352v64h-64v32h32c17.7 0 32-14.3 32-32v-32h-128v-64-64h128v-32z"/></svg>

Collection icon for collection:
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --><path d="M528 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-16 448H64V64h448v384z"/></svg>

Like icon for like:
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --><path d="M288 512c-2.7 0-5.5-.6-8-1.8c-15.7-6.8-25.6-23.1-21.8-40.9c3.8-17.8 20.8-29.9 39.2-29.9h22.6c18.4 0 35.4 12.1 39.2 29.9c3.8 17.8-6.1 34.1-21.8 40.9c-2.5 1.2-5.3 1.8-8 1.8zm0-480c-35.3 0-64 28.7-64 64 0 2.7.6 5.5 1.8 8c6.8 15.7 23.1 25.6 40.9 21.8c17.8-3.8 29.9-20.8 29.9-39.2v-22.6c0-18.4-12.1-35.4-29.9-39.2c-17.8-3.8-34.1 6.1-40.9 21.8c-1.2 2.5-1.8 5.3-1.8 8zm0 128c-35.3 0-64 28.7-64 64s28.7 64 64 64s64-28.7 64-64s-28.7-64-64-64zm0 256c-35.3 0-64 28.7-64 64s28.7 64 64 64s64-28.7 64-64s-28.7-64-64-64z"/></svg>

Comment icon for comment:
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --><path d="M288 512c-2.7 0-5.5-.6-8-1.8c-15.7-6.8-25.6-23.1-21.8-40.9c3.8-17.8 20.8-29.9 39.2-29.9h22.6c18.4 0 35.4 12.1 39.2 29.9c3.8 17.8-6.1 34.1-21.8 40.9c-2.5 1.2-5.3 1.8-8 1.8zm0-480c-35.3 0-64 28.7-64 64 0 2.7.6 5.5 1.8 8c6.8 15.7 23.1 25.6 40.9 21.8c17.8-3.8 29.9-20.8 29.9-39.2v-22.6c0-18.4-12.1-35.4-29.9-39.2c-17.8-3.8-34.1 6.1-40.9 21.8c-1.2 2.5-1.8 5.3-1.8 8zm0 128c-35.3 0-64 28.7-64 64s28.7 64 64 64s64-28.7 64-64s-28.7-64-64-64zm0 256c-35.3 0-64 28.7-64 64s28.7 64 64 64s64-28.7 64-64s-28.7-64-64-64z"/></svg>
*/

/*
JSON response from Pixabay API example:
{
  "id": 9010614,
  "pageURL": "https://pixabay.com/illustrations/cat-car-drive-road-highway-cute-9010614/",
  "type": "illustration",
  "tags": "cat, car, drive",
  "previewURL": "https://cdn.pixabay.com/photo/2024/08/31/06/37/cat-9010614_150.jpg",
  "previewWidth": 150,
  "previewHeight": 90,
  "webformatURL": "https://pixabay.com/get/g5040a1f69c5074601972ae954d5f0ec9b430f870750396ffc7ddb563c8c6e5851ec027422df5deb6c8eedeeaf44adf62781400989715342d278071744ab1d65a_640.jpg",
  "webformatWidth": 640,
  "webformatHeight": 384,
  "largeImageURL": "https://pixabay.com/get/g5d9c34a436d7e7a33ec2605b14dfb31ccd131ae6560176ff7373138c7abcb5e7d0b05966f26a2c906a61e1ee436962a41672bf308e746b2d240a11aaa1b61c9d_1280.jpg",
  "imageWidth": 9927,
  "imageHeight": 5955,
  "imageSize": 4435397,
  "views": 447,
  "downloads": 357,
  "collections": 59,
  "likes": 30,
  "comments": 4,
  "user_id": 13452116,
  "user": "Syaibatulhamdi",
  "userImageURL": "https://cdn.pixabay.com/user/2023/08/17/09-25-12-704_250x250.jpg"
},
*/
