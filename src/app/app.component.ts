import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DistanciaComponent } from "./formularios/distancia/distancia.component";
import { MultipliacionComponent } from "./formularios/multipliacion/multipliacion.component";
import { AporBComponent } from "./formularios/apor-b/apor-b.component";
import { initFlowbite } from 'flowbite';
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DistanciaComponent, MultipliacionComponent, AporBComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularSegundo01';

  ngOnInit(): void {
    initFlowbite();
  }

}
