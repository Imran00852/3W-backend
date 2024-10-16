import { config } from "dotenv";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import { v2 } from "cloudinary";

if (process.env.NODE_ENV != "production") {
  config();
}
//configure cloudinary
v2.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.SECRET_KEY,
});

//define storage
const storage = new CloudinaryStorage({
  cloudinary: v2,
  params: {
    folder: "3W",
    allowedFormat: ["png", "jpg", "jpeg"],
  },
});

export const upload = multer({ storage });
