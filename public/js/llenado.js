const getStudents = () => {
    fetch('/estudiantes').then((res) => {
        res.json().then((data) => {
            students = JSON.parse(data)
            renderTable(students)
        })
    
    }).catch((err) => {
        console.log(err)
    })
}

const renderTable = (students) => {
    let massiveString = "";
    students.forEach(student => {
        massiveString += 
        `
            <tr>
                <td>${student.nombre} ${student.apellidoPaterno} ${student.apellidoMaterno}</td>
                <td>${student.ciudad}</td>
                <td>${student.nacimiento}</td>
            </tr>
        `
    });
    $('#tbody').html(massiveString)
}

// Filling the table when the page loads
getStudents()