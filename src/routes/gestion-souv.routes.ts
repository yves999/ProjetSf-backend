import express from "express";

import {
    getGestionSouv,
    getGestionSouvById,
    createGestionSouv,
    updateGestionSouv,
    deleteGestionSouv
} from "../controllers/gestion-souv.controller";

const router = express.Router();

router.get("/", getGestionSouv);

router.get("/:identifiantCible", getGestionSouvById);

router.post("/", createGestionSouv);

router.put("/:identifiantCible", updateGestionSouv);

router.delete("/:identifiantCible", deleteGestionSouv);

export default router;