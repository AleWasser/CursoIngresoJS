function mostrar()
{
//tomo la edad  
let edad = parseInt(document.getElementById('edad').value);
let estado = document.getElementById('estadoCivil').value;

if(edad > 18 && estado == 'Soltero'){
    alert('Es soltero y no es menor');
}
	


}//FIN DE LA FUNCIÓN