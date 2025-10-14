import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Distancia } from './distancia';

@Component({
  selector: 'app-distancia',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './distancia.component.html',
  styleUrls: ['./distancia.component.css']
})
export class DistanciaComponent implements OnInit {
  formulario!: FormGroup;
  resultado!: number;
  objMult = new Distancia; 

  ngOnInit(): void {
    this.formulario = new FormGroup({
      x1: new FormControl(''),
      y1: new FormControl(''),
      x2: new FormControl(''),
      y2: new FormControl(''),
      opx: new FormControl(''),
      opy: new FormControl('')

    });
  }

   multNumeros(): void {
    let x1 = this.formulario.value.x1;
    let y1 = this.formulario.value.y1;
    let x2 = this.formulario.value.x2;
    let y2 = this.formulario.value.y2;
 
    this.objMult.x1 = x1;
    this.objMult.y1 = y1;
    this.objMult.x2 = x2;
    this.objMult.y2 = y2;
 
    this.objMult.calcular();
    this.resultado = this.objMult.resultado;
 
  }
}
