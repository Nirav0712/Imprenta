import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useFormContext } from "react-hook-form";
import { uploadService } from "../../../services/uploadService";

import {
  FiUploadCloud,
  FiTrash2,
  FiStar,
  FiImage,
} from "react-icons/fi";

const ProductImages = () => {
  const { setValue } = useFormContext();

const [uploading, setUploading] = useState(false);

  const [images, setImages] = useState([]);

  const MAX_IMAGES = 10;

  const MAX_SIZE = 5 * 1024 * 1024;




const onDrop = useCallback(
  async (acceptedFiles) => {

    if (images.length + acceptedFiles.length > MAX_IMAGES) {
      alert(`Maximum ${MAX_IMAGES} images allowed.`);
      return;
    }

    setUploading(true);

    try {
      const uploadedImages = [];

      for (const file of acceptedFiles) {
        if (file.size > MAX_SIZE) {
          alert(`${file.name} exceeds 5MB`);
          continue;
        }

        const response = await uploadService.uploadImage(file);

        uploadedImages.push({
  url: response.image.url,
  preview: response.image.url,
  public_id: response.image.public_id,
  featured:
    images.length === 0 &&
    uploadedImages.length === 0,
});
      }

      const updated = [...images, ...uploadedImages];

      setImages(updated);
      setValue("images", updated, {
  shouldDirty: true,
  shouldValidate: true,
});

    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Image upload failed.");
    } finally {
      setUploading(false);
    }
  },
  [images, setValue]
);

  const {
  getRootProps,
  getInputProps,
  isDragActive,
} = useDropzone({
  onDrop,
  multiple: true,
  disabled: uploading || images.length >= MAX_IMAGES,
  accept: {
    "image/*": [],
  },
});

  const removeImage = (index) => {

    // URL.revokeObjectURL(
    //   images[index].preview
    // );

    const updatedImages =
      images.filter(
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
setValue("images", updatedImages, {
  shouldDirty: true,
  shouldValidate: true,
});

  };

  const setFeatured = (index) => {

    const updated = images.map((img, i) => ({
  ...img,
  featured: i === index,
}));

setImages(updated);
setValue("images", updated, {
  shouldDirty: true,
  shouldValidate: true,
});

  };

  return (

    <section className="rounded-3xl border border-white/10 bg-[#101B2D] p-6 lg:p-8">

  <h2 className="text-2xl font-bold text-white">
    Product Images
  </h2>

  <div className="mt-5 flex items-center justify-between">

    <div>

      <p className="text-sm font-medium text-slate-300">

        {images.length} / {MAX_IMAGES} Images Uploaded

      </p>

      <p className="mt-1 text-xs text-slate-500">

        First uploaded image becomes Featured automatically.

      </p>

    </div>

    {images.length > 0 && (

      <span
        className="
          rounded-full
          bg-sky-500/20
          px-3
          py-1
          text-xs
          font-semibold
          text-sky-400
        "
      >

        Gallery

      </span>

    )}

  </div>

  {/* Upload Box */}

  <div
  {...(images.length < MAX_IMAGES ? getRootProps() : {})}
  style={{
    pointerEvents: uploading ? "none" : "auto",
  }}
    className={`
      mt-8
      rounded-3xl
      border-2
      border-dashed
      bg-[#08111F]
      p-10
      transition-all
      duration-300

      ${
        images.length >= MAX_IMAGES
          ? "cursor-not-allowed border-red-500 opacity-70"
          : "cursor-pointer border-slate-600 hover:border-sky-500"
      }
    `}
  >

    {images.length < MAX_IMAGES && (
       <input
  {...getInputProps()}
  disabled={uploading}
/>
)}

    <div className="flex flex-col items-center">

      <FiUploadCloud
        size={55}
        className="text-sky-400"
      />

{uploading && (
  <p className="mb-4 text-sky-400 font-semibold">
    Uploading Images...
  </p>
)}


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

        Maximum {MAX_IMAGES} Images • 5MB Each

      </p>

    </div>

  </div>

        {/* Preview */}

      {images.length > 0 && (

        <div
          className="
            mt-8
            grid
            grid-cols-2
            gap-4

            sm:grid-cols-3

            xl:grid-cols-2

            2xl:grid-cols-3
          "
        >

          {images.map((img, index) => (

            <div
             key={img.public_id || img.preview}
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
                alt={`Preview ${index + 1}`}
                className="
                  h-40
                  w-full
                  object-cover
                  transition-transform
                  duration-500
                  group-hover:scale-110
                "
              />

              <div
                className="
                  absolute
                  right-3
                  top-3
                  flex
                  gap-2
                  opacity-0
                  transition-all
                  duration-300
                  group-hover:opacity-100
                "
              >

                <button
                  type="button"
                  onClick={() => setFeatured(index)}
                  className={`rounded-full p-2 ${
                    img.featured
                      ? "bg-yellow-500 text-white"
                      : "bg-black/60 text-white"
                  }`}
                >
                  <FiStar />
                </button>

                <button
                  type="button"
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

      {/* Empty State */}

      {images.length === 0 && (

        <div className="mt-8 flex h-40 items-center justify-center rounded-2xl border border-dashed border-white/10">

          <div className="text-center">

            <FiImage
              size={40}
              className="mx-auto text-slate-500"
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