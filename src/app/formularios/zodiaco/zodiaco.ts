export class Zodiaco {
  nombre: string = '';
  paterno: string = '';
  materno: string = '';
  dia: number = 0;
  mes: number = 0;
  anio: number = 0;
  sexo: string = '';
  edad: number = 0;

  calcularEdad() {
    let hoy = new Date();
    this.edad = hoy.getFullYear() - this.anio;
    
    if (this.mes > hoy.getMonth() + 1) {
      this.edad = this.edad ;
    }
    
    if (this.mes == hoy.getMonth() + 1) {
      if (this.dia > hoy.getDate()) {
        this.edad = this.edad ;
      }
    }
  }


  Signo() {
    let signos = [
      { nombre: 'Rata', imagen: 'https://upload.wikimedia.org/wikipedia/commons/0/04/Rat.svg' },
      { nombre: 'Buey', imagen: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Ox.svg' },
      { nombre: 'Tigre', imagen: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Tiger.svg' },
      { nombre: 'Conejo', imagen: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Rabbit.svg' },
      { nombre: 'Dragón', imagen: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Dragon.svg' },
      { nombre: 'Serpiente', imagen: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/Snake.svg' },
      { nombre: 'Caballo', imagen: 'https://upload.wikimedia.org/wikipedia/commons/7/76/Horse.svg' },
      { nombre: 'Cabra', imagen: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Goat.svg' },
      { nombre: 'Mono', imagen: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Monkey.svg' },
      { nombre: 'Gallo', imagen: 'https://upload.wikimedia.org/wikipedia/commons/0/06/Rooster.svg' },
      { nombre: 'Perro', imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Dog_2.svg/1200px-Dog_2.svg.png' },
      { nombre: 'Cerdo', imagen: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Boar.svg' }
    ];
    
    let indice = (this.anio - 4) % 12;
    return signos[indice];
  }
}