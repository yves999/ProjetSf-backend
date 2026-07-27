import express from "express";
import cors from "cors";

import affichageRoutes from "./routes/affichage.routes";
import affichageSouvRoutes from "./routes/affichage-souv.routes";



const app = express();

app.use(cors());

app.use(express.json());

app.use("/menu/affichage", affichageRoutes);
app.use("/menu/affichage-souv", affichageSouvRoutes);


export default app;