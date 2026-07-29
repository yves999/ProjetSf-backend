
import { Request, Response } from "express";
import { pool } from "../database/database";


// GET ALL

export const getGestionSouv = async (req: Request, res: Response) => {

    const result = await pool.query(
        "SELECT * FROM souv ORDER BY nom"
    );

    res.json(result.rows);
};


// GET BY ID

export const getGestionSouvById = async (req: Request, res: Response) => {

    const identifiantCible = req.params.identifiantCible;

    const result = await pool.query(
        // "SELECT prenom, nom FROM JT WHERE id = $1",
        // [identifiantCible]
        "SELECT * FROM souv WHERE id = $1",
        [identifiantCible]
    );

    res.json(result.rows);
};


// CREATE

export const createGestionSouv = async (req: Request, res: Response) => {

    const { nom,prenom,date_naissance,date_mort,date_debut_regne,date_fin_regne,faits_marquants } = req.body;

      // Compter les souverains ayant le même nom et prénom

    const compteur = await pool.query(
        `SELECT COUNT(*) AS nb
         FROM souv
         WHERE nom = $1
         AND prenom = $2`,
        [nom, prenom]
    );

    const nb = Number(compteur.rows[0].nb);

    console.log("Nombre de souverains trouvés :", nb);

    if (nb >= 1) {

        console.log("Ce souverain existe déjà :", nom, prenom);

        return res.status(409).json({
            message: "Ce souverain existe déjà."
        });
    }


    const result = await pool.query(
        "INSERT INTO souv (nom,prenom,date_naissance,date_mort,date_debut_regne,date_fin_regne,faits_marquants) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *",
        [nom, prenom, date_naissance,date_mort,date_debut_regne,date_fin_regne,faits_marquants]
    );

    // const result = await pool.query(`INSERT INTO souv (id,nom,prenom,date_naissance,date_mort,date_debut_regne,date_fin_regne,faits_marquants) VALUES ( (SELECT COALESCE(MAX(id), 0) + 1 FROM souv),
    // $1, $2, $3, $4, $5, $6) RETURNING *`, [nom, prenom,date_naissance,date_mort,date_debut_regne,date_fin_regne,faits_marquants]);

     console.log ("result_CREATE: ", result);

    res.json(result.rows[0]);

};


// UPDATE

export const updateGestionSouv = async (req: Request, res: Response) => {

    const identifiantCible = req.params.identifiantCible;

    console.log(
            "identifiantCible: ",
             identifiantCible
        );

    const { nom,prenom,date_naissance,date_mort,date_debut_regne,date_fin_regne,faits_marquants } = req.body;


    // Vérification doublon
    const compteur = await pool.query(
        `SELECT COUNT(*) AS nb
         FROM souv
         WHERE nom = $1
         AND prenom = $2
         AND id <> $3`,
        [nom, prenom, identifiantCible]
    );

    const nb = Number(compteur.rows[0].nb);

    if (nb >= 1) {

        console.log(
            "MODIFICATION REFUSEE : doublon détecté pour",
            nom,
            prenom
        );

        return res.status(409).json({
            message: "Un autre souverain possède déjà ce nom et ce prénom."
        });
    }

    const result = await pool.query(
        `UPDATE souv
         SET nom = $1,
             prenom = $2,
             date_naissance = $3,
             date_mort = $4,
             date_debut_regne = $5,
             date_fin_regne = $6,
             faits_marquants = $7
         WHERE id = $8::integer
         RETURNING *`,
        [nom,prenom,date_naissance,date_mort,date_debut_regne,date_fin_regne,faits_marquants,identifiantCible]
    );

    console.log("result_UPDATE: ", result);

    res.json(result.rows[0]);
};



// DELETE

export const deleteGestionSouv = async (req: Request, res: Response) => {

    const identifiantCible = req.params.identifiantCible;

    const result = await pool.query(
        "DELETE FROM souv WHERE id = $1 RETURNING *",
        [identifiantCible]
    );

    console.log ("result_DELETE: ", result);

    res.json(result.rows[0]);
};



