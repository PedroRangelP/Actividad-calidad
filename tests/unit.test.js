const request = require('supertest')
const app = require('../src/app')

beforeEach(async () => {
    // Deleting every user in the database before testing
})

test('Should register user successfully', async () => {
    const response = await request(app).post('/estudiante').send({
        nombre: "Javier",
        apellidoPaterno: "Flores",
        apellidoMaterno: "Zavala",
        ciudad: "CDMX",
        nacimiento: "2006-10-08"
    }).expect(200)
})

test('Should fail user register because user is an adult', async () => {
    const response = await request(app).post('/estudiante').send({
        nombre: "Javier",
        apellidoPaterno: "Flores",
        apellidoMaterno: "Zavala",
        ciudad: "CDMX",
        nacimiento: "1998-10-08"
    }).expect(500)
})

test('Should fail user register because name exceeds length limit', async () => {
    const response = await request(app).post('/estudiante').send({
        nombre: "012345678901234567890123456789012345678901234567890123456789",
        apellidoPaterno: "Flores",
        apellidoMaterno: "Zavala",
        ciudad: "CDMX",
        nacimiento: "2006-10-08"
    }).expect(500)
})

test('Should fail user register because surname exceeds length limit', async () => {
    const response = await request(app).post('/estudiante').send({
        nombre: "Javier",
        apellidoPaterno: "012345678901234567890123456789012345678901234567890123456789",
        apellidoMaterno: "Zavala",
        ciudad: "CDMX",
        nacimiento: "2006-10-08"
    }).expect(500)
})

test('Should fail user register because maternal surname exceeds length limit', async () => {
    const response = await request(app).post('/estudiante').send({
        nombre: "Javier",
        apellidoPaterno: "Flores",
        apellidoMaterno: "012345678901234567890123456789012345678901234567890123456789",
        ciudad: "CDMX",
        nacimiento: "2006-10-08"
    }).expect(500)
})

test('Should fail user register because city exceeds length limit', async () => {
    const response = await request(app).post('/estudiante').send({
        nombre: "Javier",
        apellidoPaterno: "Flores",
        apellidoMaterno: "Zavala",
        ciudad: "012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789",
        nacimiento: "2006-10-08"
    }).expect(500)
})