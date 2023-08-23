import mysql from "mysql2/promise"
import App from "next/app"
const cors = require('cors')


let club = 10;

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
        console.log(FormData);
        let temp = parseInt(FormData.Played90s);
        let tempb = parseInt(FormData.Tackles);
        let tempc = parseInt(FormData.Interceptions);
        let tempd = parseInt(FormData.Clearances);
        let tempe = parseInt(FormData.Blocks);
        let tempf = parseInt(FormData.Errorsleadingtoshots);
        await dbconnection.query("UPDATE player SET player_name = ?, Country = ?, Age = ?, Club = ? WHERE player_id = ?", [FormData.Player,FormData.Country, FormData.Age, FormData.Club, player_id])
        await dbconnection.query("UPDATE `defensive stats` SET player_name = ?, position = ?, nineties = ?, tackles = ?, interceptions = ?, clearances = ?, blocks = ?, errorsleadingtoshots = ? WHERE player_id = ?", [FormData.Player, FormData.Position, parseInt(FormData.Played90s), tempb, tempc, tempd, tempe, tempf, player_id])
        await dbconnection.query("UPDATE `attacking stats` SET player_name = ?, Position = ?, played_nineties = ?, Goals = ?, Shotsperninety = ?, xG = ? WHERE player_id = ?", [FormData.Player, FormData.Position, parseInt(FormData.Played90s), parseInt(FormData.Goals), parseInt(FormData.ShotsPerNinety), 4 , player_id])
        await dbconnection.query("UPDATE `passing stats` SET player_name = ?, Position = ?, nineties = ?, Passesattempted = ?, Passsuccess = ?, Progressivedistance = ?, Assists = ?, xA = ? WHERE player_id = ?" , [FormData.Player, FormData.Position, parseInt(FormData.Played90s), parseInt(FormData.Passesattempted), parseInt(FormData.Passsuccess), parseInt(FormData.Progressivedistance) , parseInt(FormData.Assists) , parseInt(FormData.xA), player_id])
        res.status(200).json({ message: "here" });
    } catch ( error ) {
        res.status(404).json({ error: error.message });
    }
}