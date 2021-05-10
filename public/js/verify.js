$("#nombre").change(() => { checkLenght("nombre", 50, true) });
$("#apellido-paterno").change(() => { checkLenght("apellido-paterno", 50, true) });
$("#apellido-materno").change(() => { checkLenght("apellido-materno", 50, true) });
$("#ciudad").change(() => { checkLenght("ciudad", 100, true) });
$("#nacimiento").change(() => { checkDate("nacimiento", true) });

function errorMessage(id, message, hide) {
  let errorId = "#error-" + id;
  $(errorId).text(message);

  if (hide) {
    $(errorId).removeClass("check-error");
    $(errorId).addClass("d-none");
  }else {
    $(errorId).addClass("check-error");
    $(errorId).removeClass("d-none");
  }
}

function checkLenght(id, length, required) {
  let elementId = "#" + id;
  let inputLength = $(elementId).val().length;
  
  if (inputLength > length)
    errorMessage(id, "No exceder " + length + " carácteres", false);
  else if (inputLength == 0 && required)
    errorMessage(id, "Complete este campo", false);
  else
    errorMessage(id, "", true);
}

function checkDate(id, required) {
  let elementId = "#" + id;
  let actual = new Date();

  let str = $(elementId).val();
  let year = parseInt(str.slice(0, 4));
  let limitMax = parseInt(actual.getFullYear());
  let limitMin = parseInt(actual.getFullYear())-18;
  
  if (year > limitMax)
    errorMessage(id, "Ingresar un año válido", false);
  else if (str == "" && required)
    errorMessage(id, "Complete este campo", false);
  else if(year < limitMin)
    errorMessage(id, "El alumno debe ser menor de edad", false);
  else
    errorMessage(id, "", true);
}

function hasErrors() {
    if ($(".check-error").length > 0) {
        $(".check-error").removeClass("d-none")
        $(".check-error").animate({
            animation: "shake 0.5s infinite alternate"
        }, 500)
        console.log('There was an error submiting the form')
        return true
    }
    return false
}