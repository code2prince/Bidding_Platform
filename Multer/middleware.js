import upload from './multerConfiq.js';

// Define the Multer middleware for file upload
const uploadMiddleware = upload.single('image'); // 'image' is the name attribute of the file input field in your HTML form

export { uploadMiddleware };
