function validateForm() {
  var nombre = document.forms["myForm"]["nombre"].value;
  var email = document.forms["myForm"]["email"].value;
  
  if (nombre == "") {
    alert("");
    return false;
  }
  
  if (email == "") {
    alert("");
    return false;
  }
  
  // Aquí puedes agregar más validaciones según tus necesidades
  
  // Si el formulario es válido, puedes enviar los datos al servidor o realizar alguna acción adicional
}
