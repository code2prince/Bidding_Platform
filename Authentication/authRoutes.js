import express from 'express'

import { verifyToken ,getToken} from './auth.js'

export const Rout = express.Router()
Rout.get('/getToken',getToken);
Rout.post('/verifyToken',verifyToken);
