/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
function NumerosPares() {
    let numeros = [];
    const numero = parseInt(document.getElementById('numero').value);
    if (numero % 2 != 0) {
        return alert('No es un numero par.');
    }
    for (let i = 0; i < numero; i++) {
        if (i % 2 == 0) {
            numeros.push(i);
        }
    }
    alert(`Los numeros pares de ${numero} son: [${numeros}]`);
}

function NumerosImpares() {
    let numeros = [];
    const numero = parseInt(document.getElementById('numero').value);
    if (numero % 2 != 1) {
        return alert('No es un numero impar.');
    }
    for (let i = 0; i < numero; i++) {
        if (i % 2 == 1) {
            numeros.push(i);
        }
    }
    alert(`Los numeros impares de ${numero} son: [${numeros}]`);
}

function NumerosDivisibles() {
    let numeros = [];
    const numero = parseInt(document.getElementById('numero').value);
    if (numero > 100) {
        return alert('Debe ingresar un numero entre 0 y 100');
    }
    for (let i = 0; i < numero; i++) {
        if (numero % i == 0) {
            numeros.push(i);
        }
    }
    alert(`Los numeros divisibles de ${numero} son: [${numeros}]`);
}

function VerificarPrimo() {
    const numero = parseInt(document.getElementById('numero').value);
    for (let i = 2; i < numero; i++) {
        if (numero % i == 0) {
            return alert(`El numero no es primo`);
        }
    }
    return alert(`El numero es primo`);
}

function NumerosPrimos() {
    const numero = parseInt(document.getElementById('numero').value);
    let numerosPrimos = [1];
    for (let i = 2; i < numero; i++) {
        if (numero % i == 0) {
            numerosPrimos.push(i);
        }
    }
    if (numerosPrimos.length > 1) {
        return alert(`El numero no es primo. Numeros compuestos: ${numerosPrimos}`);
    }
    return alert(`El numero es primo`);
}