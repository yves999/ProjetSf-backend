


import { Request, Response } from "express";
import { pool } from "../database/database";

export const getAffichage = async (req: Request, res: Response) => {

    try {

        console.log("Route /menu/affichage appelée");

        const result = await pool.query(
            "SELECT * FROM souv ORDER BY nom"
        );

        console.log(result.rows);

        res.json(result.rows);

    } catch (err) {

        console.error("Erreur PostgreSQL :", err);

        res.status(500).json(err);
    }
};













// import { Request, Response } from "express";
// import { pool } from "../database/database";

// export const getAffichage = async (req: Request, res: Response) => {

//     const result = await pool.query(
//         "SELECT * FROM souv ORDER BY nom"
//     );

//     console.log("result_getAffichage: ", result);

//     res.json(result.rows);
// };
