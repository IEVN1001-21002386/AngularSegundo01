export class Distancia {
  x1: number=0;
  y1: number=0;
  x2: number=0;
  y2: number=0;
  opx: number=0;
  opy: number=0;
  resultado: number=0;
  distanciaResultado: number=0;



  calcular(): void {
     this.opx = this.x2 - this.x1;
     this.opy = this.y2 - this.y1;
     this.resultado = Math.sqrt(this.opx * this.opx + this.opy * this.opy)
  }
}
