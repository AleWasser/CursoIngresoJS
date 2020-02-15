function mostrar()
{

var clave;

do{
    clave = prompt("ingrese el número clave.");

    if(clave != 'utn750'){
        alert('Clave incorrecta');
    }else{
        alert('Clave correcta');
    }

}while(clave != 'utn750')

}//FIN DE LA FUNCIÓN
