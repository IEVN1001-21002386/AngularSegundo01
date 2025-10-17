import { Component } from '@angular/core';
import { Zodiaco } from './zodiaco';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-zodiaco',
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './zodiaco.component.html',
  styleUrl: './zodiaco.component.css'
})
export class ZodiacoComponent {
  formulario!: FormGroup;
  resultado: any;
  objZodiaco = new Zodiaco();

  ngOnInit(): void {
    this.formulario = new FormGroup({
      nombre: new FormControl(''),
      paterno: new FormControl(''),
      materno: new FormControl(''),
      dia: new FormControl(''),
      mes: new FormControl(''),
      anio: new FormControl(''),
    });
  }

  calcular(): void {
    const valores = this.formulario.value;

    this.objZodiaco.nombre = valores.nombre;
    this.objZodiaco.paterno = valores.paterno;
    this.objZodiaco.materno = valores.materno;
    this.objZodiaco.dia = Number(valores.dia);
    this.objZodiaco.mes = Number(valores.mes);
    this.objZodiaco.anio = Number(valores.anio);


    this.objZodiaco.calcularEdad();
    const signo = this.objZodiaco.Signo();

    this.resultado = {
      nombreCompleto: valores.nombre + ' ' + valores.paterno + ' ' + valores.materno,
      edad: this.objZodiaco.edad,
      signo: signo.nombre,
      imagen: signo.imagen,
    };
  }
}
