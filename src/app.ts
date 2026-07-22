import express from "express";
import cors from "cors";

import affichageRoutes from "./routes/affichage.routes";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/menu/affichage", affichageRoutes);

export default app;