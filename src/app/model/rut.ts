export class Rut {

    constructor() {}


    reemplazar( text, busca, reemplaza ) {
        while (text.toString().indexOf (busca) !== -1) {
          text = text.toString().replace(busca, reemplaza);

       }

       return text;

      }

     quitarPuntos(rut) {

    rut = this.reemplazar(rut, '.' , '');
    rut =	this.reemplazar(rut , '-', '');
    return rut;
}



 public validarRut(rut: String) {

    rut = this.quitarPuntos(rut);

let salida = false;
  const valor: any  = rut;
  const cuerpo = valor.slice(0, -1);
  let dv = valor.slice(-1).toUpperCase();
  let dvEsperado: any;

// Formatear RUN
rut = (cuerpo + '-' + dv );

// Si no cumple con el mínimo ej. (n.nnn.nnn)
if (rut.length < 7) {  return false; }

// Calcular Dígito Verificador
let suma = 0;
let multiplo = 2;

// Para cada dígito del Cuerpo
for (let i = 1; i <= cuerpo.length; i++) {

        // Obtener su Producto con el Múltiplo Correspondiente
        const index = multiplo * valor.charAt(cuerpo.length - i);
        // Sumar al Contador General
        suma = suma + index;

        // Consolidar Múltiplo dentro del rango [2,7]
        if (multiplo < 7) { multiplo = multiplo + 1; } else { multiplo = 2; }

}

// Calcular Dígito Verificador en base al Módulo 11
dvEsperado = 11 - (suma % 11);

// Casos Especiales (0 y K)
dv = (dv === 'K') ? 10 : dv;
dv = (dv === 0 ) ? 11 : dv;


// Validar que el Cuerpo coincide con su Dígito Verificador
if (dvEsperado.toString() === dv.toString()) {
    salida = true;
} else {
   salida = false;
}

    return salida;

 }



ponerPunto(rut) {

    if (rut.length > 4) {
     rut = this.reemplazar(rut, '.', '');
     rut =	this.reemplazar(rut, '-', '');


        if (this.validarRut(rut)) {

        if (rut.length === 6) {
       rut = rut.substr(0, 2) + '.' +
       rut.substr(2, rut.length - 3) + '-' +
       rut.substr(5, rut.length - 1 ) ;
        }  else	if (rut.length === 7) {
         rut = rut.substr(0, 3) + '.' +
         rut.substr(3, rut.length - 4) + '-' +
         rut.substr(6, rut.length - 1) ;
          }   else if (rut.length === 8) {
           rut = rut.substr(0, 1) + '.' +
           rut.substr(1, 3) + '.' +
           rut.substring(4, 7) + '-' +
           rut.substring(7, 8);
            } else if (rut.length === 9) {
                 rut = rut.substring(0, 2) + '.' +
                 rut.substring(2, 5) + '.' +
                 rut.substring(5, 8) + '-' +
                 rut.substring(8, 9);
                  }


          } else {

        }


        }  else {
            alert('rut no valido');
        }

            return rut;
    }
  }
