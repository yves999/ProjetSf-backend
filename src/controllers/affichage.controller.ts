


import { Request, Response } from "express";
import { pool } from "../database/database";


export const getAffichage = async (req:Request, res: Response) => {
    const result = await pool.query(
        "SELECT * FROM souv ORDER BY nom"
    );

    console.log("result_getAffichage: ", result);
    res.json(result.rows);

};



// "use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
// exports.getAffichage = void 0;
// const database_1 = require("../database/database");
// const getAffichage = async (req, res) => {
//     try {
//         console.log("Route /menu/affichage appelée");
//         const result = await database_1.pool.query("SELECT * FROM souv ORDER BY nom");
//         console.log(result.rows);
//         res.json(result.rows);
//     }
//     catch (err) {
//         console.error("Erreur PostgreSQL :", err);
//         res.status(500).json(err);
//     }
// };
// exports.getAffichage = getAffichage;


// import { Request, Response } from "express";
// import { pool } from "../database/database";

// export const getAffichage = async (req: Request, res: Response) => {

//     try {

//         console.log("Route /menu/affichage appelée");

//         const result = await pool.query(
//             "SELECT * FROM souv ORDER BY nom"
//         );

//         console.log(result.rows);

//         res.json(result.rows);

//     } catch (err) {

//         console.error("Erreur PostgreSQL :", err);

//         res.status(500).json(err);
//     }
// };













// import { Request, Response } from "express";
// import { pool } from "../database/database";

// export const getAffichage = async (req: Request, res: Response) => {

//     const result = await pool.query(
//         "SELECT * FROM souv ORDER BY nom"
//     );

//     console.log("result_getAffichage: ", result);

//     res.json(result.rows);
// };
