import express from "express";
import multer from "multer";

const router = express.Router();

// Multer Memory Storage
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB
  },
});

// -------------------------
// TEST GET ROUTE
// -------------------------
router.get("/", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Upload Route Working 🚀",
  });
});

// -------------------------
// TEST POST ROUTE
// -------------------------
router.post("/", upload.single("image"), (req, res) => {
  console.log("================================");
  console.log("POST /api/upload HIT");
  console.log("================================");

  console.log("Headers:");
  console.log(req.headers["content-type"]);

  console.log("Body:");
  console.log(req.body);

  console.log("File:");
  console.log(req.file);

  if (!req.file) {
    return res.status(400).json({
      success: false,
      message: "No image uploaded",
    });
  }

  return res.status(200).json({
    success: true,
    message: "Image received successfully",
    file: {
      fieldname: req.file.fieldname,
      originalname: req.file.originalname,
      mimetype: req.file.mimetype,
      size: req.file.size,
    },
  });
});

export default router;