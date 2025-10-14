export class multiplicacion {
  a: number = 0;
  b: number = 0;
  resultado: number = 0;

  calcular() {
    let a = Number(this.a);
    let b = Number(this.b);

    this.resultado = 0;

    if (a == 0 || b == 0) {
      this.resultado = 0;
    } else {
      let i = 1;
      while (i <= b) {
        this.resultado = this.resultado + a;
        i = i + 1;
      }
    }
    return this.resultado;
  }
}
