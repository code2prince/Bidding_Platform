// import dbConnect from "../DataBase/db.js";
// import customError from "./CustomError.js";
// import jwt from 'jsonwebtoken';

// const Jwt_Secret = "KGK@123";

// export const generateToken = (payload) => {
//     return jwt.sign(payload, Jwt_Secret, { expiresIn: "10m" });
// }


// export const getToken = async (req, res, next) => {
//     let token = generateToken(req.body);
//     try {
//         return res.status(200).json({ Flag: 1, Flag_Msg: token });
//     } catch (err) {
//         const Error = customError(err?.message, 500);
//         next(Error);
//     }
// }




// export const verifyToken = (req, res, next) => {
//     let tokenHeaderKey = req.headers['authorization'];
//     if (!tokenHeaderKey) {
//         return next(customError('Token is required', 401));
//     }

//     try {
//         const token = tokenHeaderKey.split(' ')[1]; // Assuming 'Bearer <token>'
//         console.log('Token:', token); // Log token for debugging
//         const verified = jwt.verify(token, Jwt_Secret);
//         if (verified) {
//             req.user = verified;
//             next();
//         } else {
//             next(customError('Invalid Token', 401));
//         }
//     } catch (error) {
//         console.error('Token Verification Error:', error.message); // Log error message for debugging
//         next(customError('Access Denied', 401));
//     }
// };

//-----------------------------------
import express from 'express';
import jwt from 'jsonwebtoken';
import customError from './CustomError.js';

const Jwt_Secret = "KGK@123";

export const generateToken = (payload) => {
    return jwt.sign(payload, Jwt_Secret, { expiresIn: "10m" });
}

export const getToken = async (req, res, next) => {
    let token = generateToken(req.body);
    try {
        return res.status(200).json({ Flag: 1, Flag_Msg: token });
    } catch (err) {
        const Error = customError(err?.message, 500);
        next(Error);
    }
}

export const verifyToken = (req, res, next) => {
    let tokenHeaderKey = req.headers['authorization'];
    if (!tokenHeaderKey) {
        return next(customError('Token is required', 401));
    }

    try {
        const token = tokenHeaderKey.split(' ')[1]; // Assuming 'Bearer <token>'
        console.log('Token:', token); // Log token for debugging
        const verified = jwt.verify(token, Jwt_Secret);
        if (verified) {
            req.user = verified;
            next();
        } else {
            next(customError('Invalid Token', 401));
        }
    } catch (error) {
        console.error('Token Verification Error:', error.message); // Log error message for debugging
        next(customError('Access Denied', 401));
    }
};
// const Rout = express.Router();

// Rout.get('/getToken', getToken);
// Rout.post('/verifyToken', verifyToken);

// export default Rout;

//---------------------------------------------

// export const verifyToken = (req, res, next) => {
//     try {
//         let token = req?.headers["authorization"];
//         if (!token) {
//             throw new Error("Token is required");
//         }
//         let splitArr = token?.split(" ");
//         if (splitArr.lenght === 2) {
//             token = splitArr?.[1];
//         }
//         if (!token) {
//             const Error = customError("Token is required", 401);
//             next(Error);
//             return;
//         }
//         jwt.verify(token, Jwt_Secret, (err, decoded) => {
//             if (err) {
//                 const Error = customError("Invalid Token", 401);
//                 next(Error);
//                 return;
//             }
//             req.user = decoded;
//             next();
//         })

//     } catch (err) {
//         const Error = customError(err?.message, 400);
//         next(Error);
//     }
// }