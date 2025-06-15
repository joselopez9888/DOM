
// Cambiar el contenido del encabezado
document.getElementById("encabezado").innerHTML = "<h1>¡Hola desde JavaScript!</h1>";

// Agregar un nuevo elemento a la lista
const nuevaTarea = document.createElement("li");
nuevaTarea.textContent = "Elemento 3";
document.getElementById("lista").appendChild(nuevaTarea);

// Función para generar un color aleatorio en formato hexadecimal
function colorAleatorio() {
  const letras = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letras[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Cambiar el color de fondo al hacer clic en el botón
document.getElementById("boton").addEventListener("click", function () {
  document.body.style.backgroundColor = colorAleatorio();
});
