import mongoose from "mongoose";

const imageSchema = new mongoose.Schema(
  {
    url: {
      type: String,
      required: true,
    },
    public_id: {
      type: String,
      required: true,
    },
    featured: {
      type: Boolean,
      default: false,
    },
  },
  { _id: false }
);

const productSchema = new mongoose.Schema(
  {
    // Basic Info
    name: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },

    brand: {
      type: String,
      default: "",
      trim: true,
    },

    sku: {
      type: String,
      default: "",
      trim: true,
    },

    barcode: {
      type: String,
      default: "",
      trim: true,
    },

    // Description
    shortDescription: {
      type: String,
      default: "",
      trim: true,
    },

    description: {
      type: String,
      default: "",
    },

    // Images
    images: [imageSchema],

    // Pricing
    regularPrice: {
      type: Number,
      default: 0,
      min: 0,
    },

    salePrice: {
      type: Number,
      default: 0,
      min: 0,
    },

    discount: {
      type: Number,
      default: 0,
      min: 0,
    },

    gst: {
      type: Number,
      default: 0,
      min: 0,
    },

    // Inventory
    stock: {
      type: Number,
      default: 0,
      min: 0,
    },

    lowStockAlert: {
      type: Number,
      default: 5,
      min: 0,
    },

    manageStock: {
      type: Boolean,
      default: true,
    },

    // Product Flags
    featured: {
      type: Boolean,
      default: false,
    },

    trending: {
      type: Boolean,
      default: false,
    },

    bestSeller: {
      type: Boolean,
      default: false,
    },

    newArrival: {
      type: Boolean,
      default: false,
    },

    showOnHome: {
      type: Boolean,
      default: false,
    },

    // SEO
    metaTitle: {
      type: String,
      default: "",
    },

    metaDescription: {
      type: String,
      default: "",
    },

    keywords: {
      type: String,
      default: "",
    },

    // Status
    status: {
      type: String,
      enum: ["Published", "Draft"],
      default: "Published",
    },

    // User
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;