
import { Pool } from "pg";

export const pool = new Pool({
    host: "aws-0-eu-west-1.pooler.supabase.com",
    port: 5432,
    user: "postgres.coqaxmhkpmyedfichwuq",
    password: "MayT1veOstBmGhKI",
    database: "postgres",
    ssl: {
        rejectUnauthorized: false
    }
});







// import { Pool } from "pg";

// export const pool = new Pool({
//     host: process.env.DB_HOST,
//     port: Number(process.env.DB_PORT),
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//     ssl: {
//         rejectUnauthorized: false
//     }
// });

// console.log(process.env.DB_HOST);
// console.log(process.env.DB_NAME);











// import { Pool } from "pg";

// export const pool = new Pool({

//     host: "localhost",

//     port: 5432,

//     user: "postgres",

//     password: "1234",

//     database: "Sf"

// });