const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const User = require('../models/user')
const router = express.Router()

const db = "mongodb://localhost:27017/articledb"

router.use(cors())

router.get('/',(req, res) =>{
    res.send('Response from API route')
})

mongoose.connect(db)
.then(res =>{
    console.log("Connect successfully to db")
}).catch(err =>{
    console.error("Connection Error")
})

router.post('/register', (req, res) =>{
    let userData = req.body
    let user = new User(userData)
    user.save().then(registeredUser =>{
        let payload ={subject: registeredUser.username};
        let token = jwt.sign(payload, 'mySecretKey');
        res.status(200).send({token})
    }).catch(err =>{
        console.error(err)
    })
})

router.post('/login', (req, res) =>{
    let userData = req.body
    User.findOne({username: userData.username}).then(user =>{
        if(!user){
            res.status(401).send("Invalid username")
        }else{
            if(user.password !== userData.password){
                res.status(401).send("Invalid password")
            }else{
                //res.status(200).send(user)
                let payload ={subject: user.username};
                let token = jwt.sign(payload, 'mySecretKey');
                res.status(200).send({token})
            }
        }
    }).catch(err =>{
        console.error(err)
    })
})

router.get('/articles', (req, res) =>{
    let articles = [
        {
            "id":1,
            "title": "Stream API",
            "description": "Java Stream",
            "date":"2023-08-23"
        },
        {
            "id":2,
            "title": "Kafka",
            "description": "Introduction to Kafka",
            "date":"2023-08-23"
        },
        {
            "id":3,
            "title": "Functional Programming ",
            "description": "Functional Programming",
            "date":"2023-08-23"
        },
        {
            "id":4,
            "title": "Kafka",
            "description": "Introduction to Kafka",
            "date":"2023-08-23"
        }
    ]
    res.json(articles)
})

router.get('/paid_articles', (req, res) =>{
    let articles = [
        {
            "id":5,
            "title": "Stream API Paid",
            "description": "Java Stream",
            "date":"2023-08-23"
        },
        {
            "id":6,
            "title": "Kafka",
            "description": "Introduction to Kafka Paid",
            "date":"2023-08-23"
        },
        {
            "id":7,
            "title": "Functional Programming Paid",
            "description": "Functional Programming",
            "date":"2023-08-23"
        },
        {
            "id":8,
            "title": "Kafka Paid",
            "description": "Introduction to Kafka",
            "date":"2023-08-23"
        }
    ]
    res.json(articles)
})



module.exports = router