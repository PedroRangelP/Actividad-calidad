const firebase = require("firebase-admin");
const path = require('path')

// Your web app's Firebase configuration
var firebaseConfig = {
    credential: firebase.credential.cert(path.join(__dirname, '/registroescolar-77b5d-firebase-adminsdk-uzmm8-8b97de22d4.json')),
    databaseURL: 'https://registroescolar-77b5d.firebaseio.com'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const FIREBASE_COLLECTION = 'estudiantes';

const snapshotToJSON = (data) => {
    const arreglo = [];
    data.forEach((doc) =>{
        const estudiante = doc.data();
        arreglo.push(estudiante);
    });
    return JSON.stringify(arreglo);
};

const storeStudent = (student) => {
    console.log('Storing ' + student.nombre + ' in the database.')
    
    return db.collection(FIREBASE_COLLECTION).add(student)
};

//storeStudent("Barbara", "Palvin", "", "Albertirsa", "1993-10-8");
const getStudents = () => {
    return db.collection(FIREBASE_COLLECTION).get()
}

module.exports = {
    storeStudent,
    getStudents,
    snapshotToJSON
}