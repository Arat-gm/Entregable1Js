//Calculamos si un courier puede ser exportado y cuanto dinero costaría
const iva = 0.21;

function ivaDelValorDeclarado(valorDeclarado) {
  return valorDeclarado * iva;
}

function calcularImpuestos() {
  let numeroFactura = prompt("Ingrese el número de factura (de 8 a 10 caracteres):");
  while (numeroFactura.length < 8 || numeroFactura.length > 10) {
    numeroFactura = prompt("Número de factura inválido. Ingrese un número de factura de 8 a 10 caracteres:");
  }

  let unidades = parseInt(prompt("Ingrese la cantidad de unidades (máximo permitido 150):"));
  while (unidades < 1 || unidades > 150) {
    unidades = parseInt(prompt("La cantidad ingresada excede lo permitido. Por favor revise su factura:"));
  }

  let peso = parseInt(prompt("Ingrese el peso en gramos (máximo permitido 1500 gr):"));
  while (peso < 1 || peso > 1500) {
    peso = parseInt(prompt("El peso ingresado excede lo permitido. Por favor revise su factura:"));
  }

  let valorDeclarado = parseInt(prompt("Declare el valor de la factura (sin puntos ni comas):"));

  let impuestoUnidades = 0;
  if (unidades > 100 && unidades < 121) {
    impuestoUnidades = 0.10;
    }

  let impuestoPeso = 0;
  if (peso > 1000 && peso < 1501) {
    impuestoPeso = 0.18;    
  }

  let impuestoTotal = 0;
  if (unidades > 100 && unidades < 151 && peso > 1000 && peso < 1501) {
    impuestoTotal = 0.4;
  }

   if (impuestoTotal > 0) {
    console.log(`Excede los valores permitidos, le corresponde abonar una penalidad del ${impuestoTotal * 100}% por exceder las 100 unidades y los 1000 gramos`);
  } else if (impuestoUnidades > 0) {
    console.log(`Deberá pagar una penalidad del ${impuestoUnidades * 100}% por exceder las 100 unidades`);
  } else if (impuestoPeso > 0) {
    console.log(`Deberá pagar una penalidad del ${impuestoPeso * 100}% por exceder los 1000 gramos`);
  }
 
  let impuestosAPagar = impuestoUnidades + impuestoPeso;

  let ivaAPagar = ivaDelValorDeclarado(valorDeclarado);

  let totalAPagar = valorDeclarado + (valorDeclarado * impuestosAPagar) + ivaAPagar;

  console.log(`El total a pagar es de $${totalAPagar}, incluye IVA`);
}

calcularImpuestos();
