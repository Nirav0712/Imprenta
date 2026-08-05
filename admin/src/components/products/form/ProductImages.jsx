import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

import {
  FiUploadCloud,
  FiTrash2,
  FiStar,
  FiImage,
} from "react-icons/fi";

const ProductImages = () => {


  const [images, setImages] = useState([]);

  const MAX_IMAGES = 10;

const MAX_SIZE = 5 * 1024 * 1024;

const onDrop = useCallback(
  (acceptedFiles) => {

    const existingNames = images.map(
      (img) => img.file.name
    );

    const validFiles = acceptedFiles
      .filter((file) => {

        if (
          existingNames.includes(file.name)
        ) {
          alert(
            `${file.name} already added`
          );

          return false;
        }

        if (file.size > MAX_SIZE) {

          alert(
            `${file.name} exceeds 5MB`
          );

          return false;
        }

        return true;

      })
      .slice(
        0,
        MAX_IMAGES - images.length
      );

    const preview = validFiles.map((file, index) => ({
  file,
  preview: URL.createObjectURL(file),
  featured:
    images.length === 0 && index === 0,
}));

setImages((prev) => [
  ...prev,
  ...preview,
]);


  },
  [images]
);

const {
  getRootProps,
  getInputProps,
  isDragActive,
} = useDropzone({

  onDrop,

  multiple: true,

  accept: {
    "image/*": [],
  },

});
 

 const removeImage = (index) => {

  URL.revokeObjectURL(images[index].preview);

  const updatedImages = images.filter(
    (_, i) => i !== index
  );

  if (
    updatedImages.length > 0 &&
    !updatedImages.some(
      (img) => img.featured
    )
  ) {
    updatedImages[0].featured = true;
  }

  setImages(updatedImages);

};

 const setFeatured = (index) => {

  setImages((prev) =>
    prev.map((img, i) => ({
      ...img,
      featured: i === index,
    }))
  );

};

  return (

    <section className="rounded-3xl border border-white/10 bg-[#101B2D] p-6 lg:p-8">

      <h2 className="text-2xl font-bold text-white">

        Product Images

      </h2>

      <div className="mt-5 flex items-center justify-between">

  <p className="text-sm text-slate-400">

    {images.length} / {MAX_IMAGES} Images Uploaded

  </p>

  {images.length > 0 && (

    <span className="rounded-full bg-sky-500/20 px-3 py-1 text-xs font-semibold text-sky-400">

      Gallery

    </span>

  )}

</div>

      <p className="mt-2 text-slate-400">

        Upload product gallery images.

      </p>

      <div className="mt-5 flex items-center justify-between">

  <div>

    <p className="text-sm font-medium text-slate-300">

      {images.length} / {MAX_IMAGES} Images Uploaded

    </p>

    <p className="mt-1 text-xs text-slate-500">

      First image will be used as the default featured image.

    </p>

  </div>

  {images.length > 0 && (

    <span className="rounded-full bg-sky-500/20 px-3 py-1 text-xs font-semibold text-sky-400">

      Gallery

    </span>

  )}

</div>

      {/* Upload */}

   <div
  {...(images.length < MAX_IMAGES
    ? getRootProps()
    : {})}
       className={`
  mt-8
  rounded-3xl
  border-2
  border-dashed
  bg-[#08111F]
  p-10
  transition-all
  ${
    images.length >= MAX_IMAGES
      ? "border-red-500 cursor-not-allowed opacity-70"
      : "cursor-pointer border-slate-600 hover:border-sky-500"
  }
`}
      >

       {images.length < MAX_IMAGES && (
  <input {...getInputProps()} />
)}

<div className="flex flex-col items-center">

  <FiUploadCloud
    size={55}
    className="text-sky-400"
  />

  <h3 className="mt-5 text-xl font-bold text-white">

    {images.length >= MAX_IMAGES
  ? "Maximum Images Uploaded"
  : isDragActive
  ? "Drop Images Here"
  : "Drag & Drop Images"}

  </h3>

  <p className="mt-3 text-slate-400">

   {images.length >= MAX_IMAGES
  ? "Delete an image to upload another."
  : "or click to browse"}

  </p>

  <p className="mt-4 text-xs text-slate-500">

    JPG • PNG • WEBP

  </p>

  <p className="mt-2 text-xs text-slate-500">

    {images.length} / {MAX_IMAGES} Images

  </p>

</div>

      </div>

     
      {/* Preview */}

      {images.length > 0 && (

        <div className="
mt-8
grid
grid-cols-2
gap-4

sm:grid-cols-3

xl:grid-cols-2

2xl:grid-cols-3
">

          {images.map((img, index) => (

            <div
              key={index}
              className="
group
relative
overflow-hidden
rounded-2xl
border
border-white/10
transition-all
duration-300
hover:border-sky-500
hover:shadow-lg
hover:shadow-sky-500/10
"
            >

              <img
                src={img.preview}
                alt=""
                className="
h-40
w-full
object-cover
transition-transform
duration-500
group-hover:scale-110
"
              />

              <div className="
absolute
right-3
top-3
flex
gap-2

opacity-0

transition-all

duration-300

group-hover:opacity-100
">

                <button
                  onClick={() => setFeatured(index)}
                  className={`
                    rounded-full
                    p-2
                    ${
                      img.featured
                        ? "bg-yellow-500 text-white"
                        : "bg-black/50 text-white"
                    }
                  `}
                >

                  <FiStar />

                </button>

                <button
                  onClick={() => removeImage(index)}
                  className="rounded-full bg-red-500 p-2 text-white"
                >

                  <FiTrash2 />

                </button>

              </div>

              {img.featured && (

                <div className="absolute bottom-3 left-3 rounded-full bg-yellow-500 px-3 py-1 text-xs font-semibold text-white">

                  Featured

                </div>

              )}

            </div>

          ))}

        </div>

      )}

      {images.length === 0 && (

        <div className="mt-8 flex h-40 items-center justify-center rounded-2xl border border-dashed border-white/10">

          <div className="text-center">

            <FiImage
              className="mx-auto text-slate-500"
              size={40}
            />

            <p className="mt-3 text-slate-500">

              No Images Uploaded

            </p>

          </div>

        </div>

      )}

    </section>

  );

};

export default ProductImages;