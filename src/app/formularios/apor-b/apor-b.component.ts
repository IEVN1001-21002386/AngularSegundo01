import { Component } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { multiplicacion } from './aporb';

@Component({
  selector: 'app-apor-b',
  imports: [],
  templateUrl: './apor-b.component.html',
  styleUrl: './apor-b.component.css'
})
export class AporBComponent {
   formulario!:FormGroup;
   resultado!:number;
   objMult=new multiplicacion();


 ngOnInit(): void {
    this.formulario = new FormGroup({
      a: new FormControl(''),
      b: new FormControl('')
    });
  }
     multNumeros() {
  this.objMult.a= Number(this.formulario.value.numero1);
  this.objMult.b= Number(this.formulario.value.numero2);
  this.resultado = this.objMult.calcular();
  }
}
        


