const FIREBASE_COLLECTION = 'estudiantes';

const renderData = function(data){
  data.forEach(function(doc){
    const estudiante = doc.data();
    console.log(estudiante);
  });
};

const storeStudent = function(nombre, apellidoPaterno, apellidoMaterno, ciudad, fecnac){
  let objStudent = {nombre: '', apellido_paterno: '', apellido_materno: '', ciudad: '', fecnac: ''};
  objStudent.nombre = nombre;
  objStudent.apellido_paterno = apellidoPaterno;
  objStudent.apellido_materno = apellidoMaterno;
  objStudent.ciudad = ciudad;
  objStudent.fecnac = fecnac;
  db.collection(FIREBASE_COLLECTION).add(objStudent).then(function(docRef){
    console.log("Estudiante añadido con el ID: ", docRef.id);
  }).catch(function(error){
    console.log(error);
  });
};

//storeStudent("Barbara", "Palvin", "", "Albertirsa", "1993-10-8");
db.collection(FIREBASE_COLLECTION).get().then(function(snapshot){
  renderData(snapshot.docs)
});