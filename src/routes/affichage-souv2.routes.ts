import express from "express";

import {
    // getAffichageJt,
    getAffichageSouv2
} from "../controllers/affichage-souv2.controller";

const router = express.Router();

// router.get("/", getAffichageJt);

router.get("/:identifiantCible", getAffichageSouv2);

export default router;
