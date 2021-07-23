class Impuestos {
  constructor(monto_bruto_anual, deducciones) {
    this._monto_bruto_anual = monto_bruto_anual;
    this._deducciones = deducciones;
  }
  get monto_bruto_anual() {
    return this._monto_bruto_anual;
  }

  set monto_bruto_anual(value) {
    this._monto_bruto_anual = value
  }
  get deducciones() {
    return this._deducciones;
  }

  set deducciones(value) {
    this._deducciones = value
  }
}

class Cliente {
  constructor(nombre, impuesto) {
    this._nombre = nombre;
    this._impuesto = impuesto;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nuevoNombre) {
    this._nombre = nuevoNombre
  }

  calcularImpuesto() {
    return (this._impuesto.monto_bruto_anual - this._impuesto.deducciones);
  }
}

const impuestosDeLuis = new Impuestos(100, 5)

const clienteLuis = new Cliente("Luis", impuestosDeLuis)

const impuestosDeCarolina = {
  monto_bruto_anual: 200,
  deducciones: 10,
}
const clienteCarolina = new Cliente("Carolina", impuestosDeCarolina);

const impuestosDeAngela = new Impuestos(300, 15);
const clienteAngela = new Cliente("Angela", impuestosDeAngela);

const clienteSebastian = new Cliente("Sebastian",1);
const resultado = clienteSebastian.calcularImpuesto();

console.log({ resultado });
