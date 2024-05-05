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

app.get('/:id',(req,res)=>{
    const sql = "SELECT * from user_details WHERE `Id`=?";
    const id = req.params.id;
    db.query(sql,[id], (err,data)=>{
        if(err) return res.json("Error")
        return res.json(data)
    })
})

app.post('/addUser',(req,res)=>{
    const sql = "INSERT INTO user_details (`Fullname`,`Age`,`Gender`,`Company`) VALUES(?)";
    const values= [
        req.body.name,
        req.body.age,
        req.body.gender,
        req.body.company
    ]

    db.query(sql, [values], (err,data)=>{
        if(err) return res.json("Error")
        return res.json(data)
    })
})

app.put('/updateUser/:id',(req,res)=>{
    const sql = "UPDATE user_details set `Fullname`=?, `Age`=?, `Gender`=?, `Company`=? WHERE Id=? ";
    const values= [
        req.body.name,
        req.body.age,
        req.body.gender,
        req.body.company
    ]
    const id= req.params.id

    db.query(sql, [...values,id], (err,data)=>{
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