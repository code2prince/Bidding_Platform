import multer from "multer";
import path from "path";

// Set up Multer storage engine
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "D:/KGK/Image"); // Destination directory
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${path.basename(file.originalname)}`); // Use original filename with timestamp
  },
});

// Initialize Multer with the storage engine
const upload = multer({ storage: storage });

export default upload;
