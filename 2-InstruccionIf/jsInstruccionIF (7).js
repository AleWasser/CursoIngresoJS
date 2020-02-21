function mostrar()
{
//tomo la edad  

let edad = parseInt(document.getElementById('edad').value);
let estado = document.getElementById('estadoCivil').value;

if(edad < 18 && estado != 'Soltero'){
    alert('Es muy pequeño');
}

}//FIN DE LA FUNCIÓN
