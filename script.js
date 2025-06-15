// Cambiar el contenido del encabezado
document.getElementById("encabezado").innerHTML = "<h1>¡Hola desde JavaScript!</h1>";

// Agregar un nuevo elemento a la lista
const nuevaTarea = document.createElement("li");
nuevaTarea.textContent = "Elemento 3";
document.getElementById("lista").appendChild(nuevaTarea);

// Modificar el atributo de estilo al hacer clic
document.getElementById("boton").addEventListener("click", function () {
  document.body.style.backgroundColor = "#f0e68c"; // color caqui claro
});
