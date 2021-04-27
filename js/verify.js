//document.getElementById(nacimiento).addEventListener("change", function() {verificarDate(this); detectarChanges()});

function errorMessage(errorId, message, hide) {
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
  let errorId = "#error-" + id;
  let inputLength = $(elementId).val().length;
  
  if (inputLength > length)
    errorMessage(errorId, "No exceder " + length + " carácteres", false);
  else if (inputLength == 0 && required)
    errorMessage(errorId, "Complete este campo", false);
  else
    errorMessage(errorId, "", true);
}

function checkDate(id) {
  let actual = new Date();
  let errorId = "#error-" + id;

  let str = $(elementId).val();
  let year = parseInt(str.slice(0, 4));
  let limitMax = parseInt(actual.getFullYear());
  let limitMin = parseInt(actual.getFullYear())-18;
  
  if (year > limitMax)
    errorMessage(errorId, "Ingresar un año válido", false);
  else if (str == "")
    errorMessage(errorId, "Complete este campo", false);
  else if(year < limitMin)
    errorMessage("El alumno debe ser mayor de edad", false);
  else
    mensajeError(errorId, "", true);
}

function checkErrors() {
  if ($(".check-error").length > 0) {
    window.scrollTo({
      top: $(".check-error").first().parent().offset().top - 100,
      behavior: 'smooth'
    });
      $(".check-error").removeClass("d-none");
      $(".check-error").addClass("animation");
      window.setTimeout(removeAnimation, 500);

    return false;
  } else {
    return true;
  }
}

function removeAnimation() {
  $(".check-error").removeClass("animation");
}