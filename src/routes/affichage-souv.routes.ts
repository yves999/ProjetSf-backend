import express from "express";

import {
    getAffichageSouv
   
} from "../controllers/affichage-souv.controller";

const router = express.Router();

router.get("/", getAffichageSouv);

export default router;





// import express from "express";

// import {
//     getAffichage
  
// } from "../controllers/affichage.controller";

// const router = express.Router();

// router.get("/", getAffichage);


// export default router;