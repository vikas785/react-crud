import express from 'express';
import cors from 'cors';
import mysql from 'mysql';
 
const app = express()
app.use(express.json())
app.use(cors())

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'userdb'
})

app.get('/',(req,res)=>{
    const sql = "SELECT * from user_details";
    db.query(sql, (err, data)=>{
        if(err) return res.json("Error")
        return res.json(data)
    })
})

app.post('/addUser',(req,res)=>{
    const sql = "INSERT INTO user_details (`fullname`,`age`,`gender`,`company`,`married`) VALUES(?)";
    const values= [
        req.body.name,
        req.body.age,
        req.body.gender,
        req.body.company,
        req.body.maritalStatus
    ]

    db.query(sql, [values], (err,data)=>{
        if(err) return res.json("Error")
        return res.json(data)
    })
})

app.delete('/user/:id',(req, res)=>{
    const sql = "DELETE FROM user_details WHERE id=?";
    const id = req.params.id;
    db.query(sql,[id], (err,data)=>{
        if(err) return res.json("Error")
        return res.json(data)
    })
})

app.listen(8001, ()=>{
    console.log('hello')
})