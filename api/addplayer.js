import mysql from "mysql2/promise"
import App from "next/app"
const cors = require('cors')


let club = 10;
let player_id = 173;
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
        console.log(req.body);
        await dbconnection.query("INSERT INTO player (player_id, player_name, Country, Position, Age, Club, club_id) VALUES (?,?,?,?,?,?,?)" , [player_id, FormData.Player, FormData.Country, FormData.Position, FormData.Age, FormData.Club, club])
        await dbconnection.query("INSERT INTO `attacking stats` (player_id, player_name, Position, played_nineties, Goals, Shotsperninety, xG) VALUES (?,?,?,?,?,?,?)" , [player_id, FormData.Player, FormData.Position, FormData.Played90s, FormData.Goals, FormData.Shotsperninety, 4])
        await dbconnection.query("INSERT INTO `defensive stats` (player_id, player_name, position, nineties, tackles, interceptions, clearances, blocks, errorsleadingtoshots) VALUES (?,?,?,?,?,?,?,?,?)" , [player_id, FormData.Player, FormData.Position, FormData.Played90s, FormData.Tackles, FormData.Intereptions, FormData.Clearances, FormData.Blocks, FormData.Errorsleadingtoshots])
        await dbconnection.query("INSERT INTO `passing stats` (player_id, player_name, Position, nineties, Passesattempted, Passsuccess, Progressivedistance, Assists, xA) VALUES (?,?,?,?,?,?,?,?,?)" , [player_id, FormData.Player, FormData.Position, FormData.Played90s, FormData.Passesattempted, FormData.Passuccess, FormData.Progressivedistance , FormData.Assists , FormData.xA])
        res.status(200).json({ players: FormData });
        player_id = player_id + 1;
    } catch ( error ) {
        res.status(404).json({ error: error.message });
    }
}