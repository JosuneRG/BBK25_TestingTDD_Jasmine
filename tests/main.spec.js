// Agrupamos todas las pruebas relacionadas con la función "esPar"
describe('Ejercicio 1: Verificar si un número es par', () => {
    
    //Esto verifica que existe una variable llamada esPar y que su tipo sea una función.
    it('should be a function', () => {
        expect(typeof esPar).toEqual('function');
    })

    //Verifica que la función devuelva un booleano cuando se le pasa un número
    it('should return a boolean', () => {
        expect(typeof esPar(2)).toEqual('boolean');
    })

    //✅ Verifica que devuelva true cuando el número es par
    it('should return true for even numbers', () => {
        expect(esPar(0)).toBe(true);    
    }); 

     //✅ Verifica que devuelva false cuando el número es par
     it('should return false for even numbers', () => {
        expect(esPar(1)).toBe(false);    
    }); 

    // 🛑 Prueba opcional: Manejo de errores o entradas no válidas
    it('should return false if the input is not a number', () => {
        expect(esPar('hola')).toBe(false);
        expect(esPar(undefined)).toBe(false);
        expect(esPar(null)).toBe(false);
    });
})

describe('Ejercicio 2: Calcular el factorial de un número', () => {

    //Esto verifica que existe una variable llamada factorial y que su tipo sea una función.
    it('should be a function', () => {
        expect(typeof factorial).toEqual('function');
    })

    // El factorial de 0 debe ser 1
    it('should return 1 if input is 0', () => {
        expect(factorial(0)).toBe(1);
    });

    // Factoriales básicos conocidos
    it('should return the correct factorial for small numbers', () => {
        expect(factorial(1)).toBe(1);   // 1! = 1
        expect(factorial(2)).toBe(2);   // 2! = 2
        expect(factorial(3)).toBe(6);   // 3! = 6
        expect(factorial(5)).toBe(120); // 5! = 120
    });

    // Números más grandes
    it('should return correct factorial for larger number', () => {
        expect(factorial(6)).toBe(720);
        expect(factorial(7)).toBe(5040);
    });

    // Casos inválidos
    it('should return undefined for negative numbers', () => {
        expect(factorial(-1)).toBe(undefined);
    });

    it('should return undefined for non-integer values', () => {
        expect(factorial(2.5)).toBe(undefined);
    });

    it('should return undefined if input is not a number', () => {
        expect(factorial('hola')).toBe(undefined);
        expect(factorial(null)).toBe(undefined);
        expect(factorial(undefined)).toBe(undefined);
    });
    
})