const path = require('path')
const express = require('express')
const firebase = require('./utils/firebase')
const verify = require('./utils/verify-server')

const app = express()

// Define paths for express config
const publicDirectoryPath = path.join(__dirname, '..', 'public')

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

// Application routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', '/registro.html'))
})

app.post('/estudiante', async (req, res) => {
    const student = req.body
    if(verify.verifyStudent(student)){
        await firebase.storeStudent(student)
        res.status(200).send()
    }else {
        res.status(500).send()
    }
})

app.get('/estudiantes', async (req, res) => {
    const studentsSnapshot = await firebase.getStudents()
    students = firebase.snapshotToJSON(studentsSnapshot)

    res.send(JSON.stringify(students))
})

module.exports = app