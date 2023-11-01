const router = require('express').Router()
const {db} = require('../model/dbConnection')

router.get('/data', (req, res)=>{
    const sqlQuery = "SELECT * FROM user"
    db.query(sqlQuery, (err, result)=>{
        if(err){
            console.log(err)
        }else{
            res.send(result)
            console.log(result)
        }
    })
})

router.get('/user/:user_email', (req, res)=>{
    const userEmail = req.params.user_email
    const sqlQuery = "SELECT * FROM user WHERE user_email = ?"
    db.query(sqlQuery, userEmail, (err, result)=>{
        if(err){
            console.log(err)
        }else{
            res.send(result)
            console.log(result)
        }
    })
})

router.post('/buat', (req, res)=>{
    const userName = req.body.user_name
    const userEmail = req.body.user_email
    const userPassword = req.body.user_password

    const sqlQuery = "INSERT INTO user (user_name, user_email, user_password) VALUE (?, ?, ?)"
    db.query(sqlQuery, [userName, userEmail, userPassword], (err, result)=>{
        if(err){
            console.log(err)
        }else{
            res.send(result)
            console.log(result)
        }
    })
})

router.put('/update/:id', (req, res)=>{
    const {id} = req.params
    const userName = req.body.user_name
    const userEmail = req.body.user_email
    const userPassword = req.body.user_password
    const sqlQuery = "UPDATE user SET user_name = ?, user_email = ? , user_password = ? WHERE user_id = ?"
    db.query(sqlQuery, [userName, userEmail, userPassword,  id], (err, result)=>{
        if(err){
            console.log(err)
        }else{
            res.send(result)
            console.log(result)
        }
    })

})

router.delete('/hapus/:id', (req, res)=>{
    const {id} = req.params
    const sqlQuerry = "DELETE FROM user WHERE user_id = ?"
    db.query(sqlQuerry, id, (err, result)=>{
        if(err){
            console.log(err)
        }else{
            res.send(result)
            console.log(result)
        }
    })
})

router.get('/rubah/:id', (req, res)=>{
    const {id} = req.params
    const sqlQuery = "SELECT * FROM user WHERE user_id = ?"
    db.query(sqlQuery, id, (err, result)=>{
        if(err){
            console.log(err)
        }else{
            res.send(result)
            console.log(result)
        }
    })
})

module.exports = router