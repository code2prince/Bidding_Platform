import express from "express";
import { UserRegister } from "../Controller/Users.js";

const router = express.Router();

router.post('/users/register', UserRegister);

export default router;