/*Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4*/
function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numberoRamdom=Math.floor(Math.random() * 10) + 1;
	console.log(numeroRandom);
if(nota>9 && nota<10)
{
	alert=("excelente");
		
}	
 else
  {
	  if(nota>4)
    {
	  alert=("APROBÓ");
    }
    else
    {
	  if(nota<4)
	   {	  
	     alert=("Vamos, la proxima se puede");
     }

  }   }

}
//FIN DE LA FUNCIÓN