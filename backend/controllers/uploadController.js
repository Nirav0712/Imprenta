import cloudinary from "../config/cloudinary.js";
import streamifier from "streamifier";

export const uploadImage = async (req, res) => {
  try {
    console.log("=================================");
    console.log("UPLOAD REQUEST RECEIVED");
    console.log("=================================");

    console.log("req.file =>", req.file);

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No image selected",
      });
    }

    console.log("Uploading image to Cloudinary...");

    const result = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: "imprenta/products",
          resource_type: "image",
        },
        (error, result) => {
          console.log("========== CLOUDINARY CALLBACK ==========");

          if (error) {
            console.log("Cloudinary Error:");
            console.log(error);
            return reject(error);
          }

          console.log("Cloudinary Success:");
          console.log(result);

          resolve(result);
        }
      );

      streamifier
        .createReadStream(req.file.buffer)
        .pipe(uploadStream);
    });

    console.log("Upload Completed Successfully");

    return res.status(200).json({
      success: true,
      image: {
        url: result.secure_url,
        public_id: result.public_id,
      },
    });

  } catch (error) {
    console.log("========== UPLOAD ERROR ==========");
    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};