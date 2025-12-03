import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { multiplicacion } from './aporb';

@Component({
  selector: 'app-apor-b',
  imports: [ReactiveFormsModule],
  templateUrl: './apor-b.component.html',
  styleUrl: './apor-b.component.css'
})
export class AporBComponent implements OnInit {
  formulario!: FormGroup;
  resultado!: number;
  objMult = new multiplicacion();

  ngOnInit(): void {
    this.formulario = new FormGroup({
      a: new FormControl(''),
      b: new FormControl('')
    });
  }

  multNumeros() {
    // CORREGIDO: Cambiar numero1 por a y numero2 por b
    this.objMult.a = Number(this.formulario.value.a);
    this.objMult.b = Number(this.formulario.value.b);
    this.resultado = this.objMult.calcular();
  }
}
        


