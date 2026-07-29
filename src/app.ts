import express from "express";
import cors from "cors";

import affichageRoutes from "./routes/affichage.routes";
import affichageSouvRoutes from "./routes/affichage-souv.routes";
import affichageSouv2Routes from "./routes/affichage-souv2.routes";
import gestionSouvRoutes from "./routes/gestion-souv.routes";



// gestion-souv.routes


const app = express();

app.use(cors());

app.use(express.json());

app.use("/menu/affichage", affichageRoutes);
app.use("/menu/affichage-souv", affichageSouvRoutes);
app.use("/menu/affichage-souv/affichage-souv2", affichageSouv2Routes);
app.use("/menu/gestion-souv", gestionSouvRoutes);

export default app;