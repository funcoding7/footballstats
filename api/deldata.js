import mysql from "mysql2/promise"
import App from "next/app"
const cors = require('cors')

export default async function handler(req, res) {

    
    const dbconnection = await mysql.createConnection({
        host: "localhost" ,
        database: "footballstats",
        //port: 8889,
        user: "root",
        password: "",
    })
    try{
        const FormData = req.body;
        const player_id = FormData.id;
        await dbconnection.query("DELETE FROM `attacking stats` WHERE player_id = ?", [player_id])
        await dbconnection.query("DELETE FROM `defensive stats` WHERE player_id = ?", [player_id])
        await dbconnection.query("DELETE FROM `passing stats` WHERE player_id = ?", [player_id])
        await dbconnection.query("DELETE FROM `player` WHERE player_id = ?", [player_id])
        res.status(200).json({ message: "here" });
    } catch ( error ) {
        res.status(404).json({ error: error.message });
    }
}