function esPar(numero) {
    // Verifica que el argumento sea un número
    if (typeof numero !== 'number')
    {
        return false;
    }

    // Devuelve true si es divisible por 2, false si no
    return numero % 2 === 0;
}

// Función que calcula el factorial de un número entero no negativo
function factorial(n) {
    // Validación: si no es un número válido o es negativo, devolvemos undefined
    if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) {
      return undefined;
    }
  
    // Caso especial: factorial de 0 es 1
    if (n === 0) return 1;
  
    // Acumulador del resultado
    let resultado = 1;
  
    // Multiplicamos del 1 hasta n
    for (let i = 1; i <= n; i++) {
      resultado *= i;
    }
  
    return resultado;
}