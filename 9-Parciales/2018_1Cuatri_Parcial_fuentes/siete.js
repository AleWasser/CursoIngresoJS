function mostrar()
{
    let nota; 
    let sexo;
    let alumnos = [];
    let sumaNotas = 0;
    let notaBaja = {
        'nota': 10
    };
    let varones = 0;

    for (let i = 0; i < 2; i++) {
        do {
             nota = parseInt(prompt('Ingrese la nota del alumno: '));
            if(isNaN(nota) || nota < 0 || nota > 10){
                alert('Ingrese una nota valida');
            }
        } while (isNaN(nota) || nota < 0 || nota > 10);

        do {
            sexo = prompt('Ingrese el sexo del alumno');
            if(sexo != 'f' && sexo !='m'){
                alert('Ingrese un sexo valido');
                break;
            }
       } while (sexo != 'f' && sexo !='m');

        let data = {
            'nota': nota,
            'sexo': sexo
        }

        alumnos.push(data);
    }

    alumnos.forEach(el => {
        sumaNotas += el.nota;
        if(el.nota <= notaBaja.nota){
            notaBaja.nota = el.nota;
            notaBaja.sexo = el.sexo;
        }
        if(el.nota >= 6 && el.sexo == 'm'){
            varones++;
        } 
    });

    alert(`Promedio de notas: ${sumaNotas / alumnos.length}\nNota y sexo mas bajo: ${notaBaja.sexo} ${notaBaja.nota}\nCantidad de varones con nota mayor a 6: ${varones}`);
}

