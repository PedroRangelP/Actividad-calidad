const verifyStudent = (student) => {
    var isOk = true
    let actual = new Date();
    let year = parseInt(student.nacimiento.slice(0, 4)); 

    isOk = isOk && (student.nombre.length <= 50)
    isOk = isOk && (student.apellidoPaterno.length <= 50)
    isOk = isOk && (student.apellidoMaterno.length <= 50)
    isOk = isOk && (student.ciudad.length <= 100)
    isOk = isOk && (year <= actual.getFullYear() && year >= actual.getFullYear()-18)
    
    return isOk
}

module.exports = {
    verifyStudent
}