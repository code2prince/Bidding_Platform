import express from "express";
import { UserRegister, UserLogin, GetUserProfile } from "../Controller/Users.js";
import { verifyToken } from "../Authentication/auth.js";
import {GetAllItems,CreateItems,GetItemById,updateItemById,DeleteItemById} from '../Controller/Items.js'

export const Router = express.Router()

Router.post('/users/register', UserRegister);
Router.post('/users/login',verifyToken, UserLogin)
Router.get('/users/profile', GetUserProfile)

Router.get('/items',GetAllItems)
Router.get('/items/:id',GetItemById)
Router.post('/items',CreateItems)
Router.put('/items/:id',updateItemById)
Router.delete('/items/:id',DeleteItemById)