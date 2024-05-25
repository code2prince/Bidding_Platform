import express from "express";
import { UserRegister ,UserLogin, GetUserProfile} from "../Controller/Users.js";

export const Router=express.Router()

Router.post('/users/register', UserRegister);
Router.post('/users/login',UserLogin)
Router.get('/users/profile',GetUserProfile)