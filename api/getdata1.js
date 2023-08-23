import mysql from "mysql2/promise"

export default async function handler(req, res) {

    const dbconnection = await mysql.createConnection({
        host: "localhost" ,
        database: "footballstats",
        // port: 8889,
        user: "root",
        password: "",
    })
    try{
        const playerName = req.body.playerid;
        console.log(playerName);
        const query = "SELECT * FROM `attacking stats` WHERE player_name LIKE '" + playerName + "%'"
        const values = []
        const [data] = await dbconnection.execute(query, values)
        dbconnection.end();
        res.status(200).json({ players: data });

    } catch ( error ) {
        res.status(200).json({ error: error.message });
    }

}