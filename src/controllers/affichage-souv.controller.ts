
import { Request, Response } from "express";
import { pool } from "../database/database";

export const getAffichageSouv = async (req: Request, res: Response) => {

    const result = await pool.query(
        "SELECT * FROM souv ORDER BY nom"
    );

     console.log("result_getAffichageSouv: ", result);

    res.json(result.rows);
};


// export const getAffichageJtById = async (req: Request, res: Response) => {

//     const identifiantCible = req.params.identifiantCible;

//     const result = await pool.query(
//         "SELECT prenom, nom FROM JT WHERE id = $1",
//         [identifiantCible]
//     );

//     res.json(result.rows);
// };
