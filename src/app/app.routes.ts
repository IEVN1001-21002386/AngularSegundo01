
/* import { SignUpComponent } from './auth/features/sign-up/sign-up.component';


export default[
  {
    path: 'listaalumnos',
    loadComponent:()=> import('./alumnos/alumnos.component')
  },
  {
    path: 'agregar',
    loadComponent:()=> import('./agregar/agregar.component')
  },
  {
    path: 'eliminar/:matricula',
    loadComponent:()=> import('./eliminar/eliminar.component').then(c=>c.EliminarComponent)
  },
  {
    path: 'editar/:matricula',
    loadComponent:()=> import('./editar/editar.component').then(c=>c.EditarComponent)
  }
] as Routes

export const routes: Routes = [
    {
        path: 'auth',
        children: [
            {
                path: 'sign-in',
                loadComponent: () => import('./auth/features/sign-in/sign-in.component').then( (c) => c.SignInComponent),
            },
            {
                path: 'sign-up',
                loadComponent: () => import('./auth/features/sign-up/sign-up.component').then( (c) => c.SignUpComponent),
            },
        ],
    },
    {
        path:'utl',
        children: [
            {
                path: 'listaalumnos',
                loadComponent: () => import('./utl/alumnos/alumnos.component').then( (c) => c.AlumnosComponent),
            },
            {
                path: 'agregar',
                loadComponent: () => import('./utl/agregar/agregar.component').then( (c) => c.AgregarComponent),
            },
            {
                path: 'eliminar/:matricula',
                loadComponent: () => import('./utl/eliminar/eliminar.component').then( (c) => c.EliminarComponent),
            },
            {
                path: 'editar/:matricula',
                loadComponent: () => import('./utl/editar/editar.component').then( (c) => c.EditarComponent),
            },
        ],
        
    },
    {
        path:'formularios',
        children: [
            {
                path: 'apor-b',
                loadComponent: () => import('./formularios/apor-b/apor-b.component').then( (c) => c.AporBComponent),
            },
            {
                path: 'distancia',
                loadComponent: () => import('./formularios/distancia/distancia.component').then( (c) => c.DistanciaComponent),
            },
            {
                path: 'multipliacion',
                loadComponent: () => import('./formularios/multipliacion/multipliacion.component').then( (c) => c.MultipliacionComponent),
            },
            {
                path: 'zodiaco',
                loadComponent: () => import('./formularios/zodiaco/zodiaco.component').then( (c) => c.ZodiacoComponent),
            },
        ],
    },

    {path: '', redirectTo: 'admin', pathMatch: 'full'},
    {path: '**', redirectTo: 'admin'},
]; */
 
import { Routes } from '@angular/router';
 
export const routes: Routes = [
/*   {
    path: 'auth',
    loadChildren: () =>
      import('./auth/features/auth.routes').then((m) => m.default),
  }, */
  {
    path: 'utl',
    loadChildren: () =>
      import('./utl/utl.routes').then((m) => m.default),
  },
/*   {
    path: 'formularios',
    loadChildren: () =>
      import('./formularios/formularios.routes').then((m) => m.default),
  }, */
];