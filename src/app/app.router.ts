import { CargarElectroComponent } from './cargar-electro/cargar-electro.component';
import { ElectroPrendienteComponent } from './electro-prendiente/electro-prendiente.component';

import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ModuleWithProviders } from '@angular/core';
import { ImprimirComponent } from './imprimir/imprimir.component';
import { ElectroImpresoComponent } from './electro-impreso/electro-impreso.component';

  const appRoutes: Routes = [
    {path: '', redirectTo: '/home',  pathMatch: 'full'  },
    {path: 'home', component: HomeComponent },
    {path: 'ingresar_electro', component: CargarElectroComponent},
    {path: 'electro_pendiente', component: ElectroPrendienteComponent },
    {path: 'imprimir', component: ImprimirComponent},
    {path: 'reimprimir', component: ElectroImpresoComponent}

  ];


  export const routes: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });
