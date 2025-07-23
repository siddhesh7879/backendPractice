// require('dotenv').config()

// // console.log("Chai aur Code");

// const express = require('express')
// const app = express()

import express from 'express';
const app = express();
const port = process.env.PORT || 4000;
 
// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

app.get('/api/jokes', (req, res) =>{
        const jokes= [
            {
                id:1,
                title:'A joke',
                content:'This is a joke'
            },
            {
                id:2,
                title: 'This is another joke',
                content: 'This is another joke'
            },
            {
                id:3,
                title: 'This is third joke',
                content: 'This is third joke'
            },
                        {
                id:4,
                title: 'This is fourth joke',
                content: 'This is fourth joke'
            },
            {
                id:5,
                title: 'This is fifth joke',
                content: 'This is fifth joke'
            },
        ]
        res.send(jokes);
})

app.get('/twitter', (req, res) => { res.send('siddheshdotcom') })

app.get('/login', (req, res) => { res.send('<h1>Please login here</h1>') })

app.get('/youtube', (req, res) => { res.send('<h2>Chai aur code</h2>') })

app.listen(port, () => {
    console.log(`Serve at http://localhost: ${port}`);
})

