import app from "./app";

app.listen(3000, () => {
    console.log("Serveur démarré");
});





// import express from "express";
// import cors from "cors";

// import affichageRoutes from "./routes/affichage.routes";



// // import "dotenv/config";

// const app = express();

// app.use(cors());

// app.use(express.json());

// app.listen(3000, () => {

//     console.log("Serveur démarré");

// });

// const PORT = 5000;

// app.listen(PORT, () => {
//     console.log(`Serveur démarré sur le port ${PORT}`);
// });


// ROUTES

// app.use("/menu/affichage", affichageRoutes);