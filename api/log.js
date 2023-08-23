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
        let data = 0;
        const Data = await dbconnection.query("SELECT * FROM user WHERE username = ? AND pwd = ?", [req.body[0],req.body[1]])
        console.log(Data[0]);
        if(Data[0].length == 0){
            console.log("0")
            data = 0;
        }
        else {
            data = 1
            console.log("1")
        }
        res.status(200).json({ players: data });
    } catch ( error ) {
        res.status(404).json({ error: error.message });
    }
}