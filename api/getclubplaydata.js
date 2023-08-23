import mysql from "mysql2/promise"

export default async function handler(req, res) {

    const dbconnection = await mysql.createConnection({
        host: "localhost",
        database: "footballstats",
        // port: 8889,
        user: "root",
        password: "",
    })
    try {
        const id = req.body;
        console.log(id);
        const query = " SELECT * FROM `player` WHERE club_id = ?"
        const values = [id]
        const [data] = await dbconnection.execute(query, values)
        dbconnection.end();
        res.status(200).json({ players: data });

    } catch (error) {
        res.status(200).json({ error: error.message });
    }

    res.status(200).json({ name: 'John Doe' });
}