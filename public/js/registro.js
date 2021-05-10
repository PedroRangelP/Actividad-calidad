$('#form-estudiante').submit(function(e) {
    // Prevent reload
    e.preventDefault()

    if(hasErrors())
        return
    
    // Obtaining the form data
    let formData = new FormData(e.target)
    const values = Object.fromEntries(formData.entries())

    fetch('/estudiante', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)

    }).then((res) => {
        console.log(res.status)
        this.reset()
    }).catch((err) => {
        console.log(err)
    })
    $('#nuevo-estudiante').modal('hide')
    getStudents()
})