import express from "express";
import { UserRegister, UserLogin, GetUserProfile } from "../Controller/Users.js";
import { verifyToken } from "../Authentication/auth.js";
import {GetAllItems,CreateItems,GetItemById,updateItemById,DeleteItemById} from '../Controller/Items.js'
import {GetAllBidsItems,CreateBidsItems} from '../Controller/bids.js'
import { uploadMiddleware } from '../Multer/middleware.js';

export const Router = express.Router()

Router.post('/users/register', UserRegister);
Router.post('/users/login',verifyToken, UserLogin)
Router.get('/users/profile', GetUserProfile)

Router.get('/items',GetAllItems)
Router.get('/items/:id',GetItemById)
Router.post('/items',verifyToken,uploadMiddleware,CreateItems)
Router.put('/items/:id',verifyToken,updateItemById)
Router.delete('/items/:id',verifyToken,DeleteItemById)

Router.get('/items/:itemId/bids',verifyToken,GetAllBidsItems)
Router.post('/items/:itemId/bids',verifyToken,CreateBidsItems)
