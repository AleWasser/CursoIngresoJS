//Al ingresar una edad debemos informar si la persona es mayor de edad,
// sino informar que es un menor de edad.function mostrar()
{
//tomo la edad  
let edad = parseInt(document.getElementById('edad').value);

// if (!(edad >= 13 && edad <= 17)){
//     alert('No es adolescente');
// }

if(edad < 13 && edad > 17)
{
}else
{
    alert("No es adolescente");
}
}

//FIN DE LA FUNCIÓN