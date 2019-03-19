import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CargarElectroComponent } from './cargar-electro/cargar-electro.component';
import { LlenarElectroComponent } from './llenar-electro/llenar-electro.component';
import { HomeComponent } from './home/home.component';
import { ElectroImpresoComponent } from './electro-impreso/electro-impreso.component';


import { ElectroPrendienteComponent } from './electro-prendiente/electro-prendiente.component';


import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestoreModule } from '@angular/fire/firestore';


import { environment } from '../environments/environment';

import { routes  } from './app.router';

// importacionde herramienta de para zoo
import { ImageViewerModule } from '../../node_modules/ngx-image-viewer';
import { ImprimirComponent } from './imprimir/imprimir.component';
import { SelecComponent } from './imprimir/selec/selec.component';
import { FechaPipe } from './pipe/fecha.pipe';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CargarElectroComponent,
    LlenarElectroComponent,
    ElectroPrendienteComponent,
    ElectroImpresoComponent,
    HomeComponent,
    ImprimirComponent,
    SelecComponent,
    FechaPipe

  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    FormsModule,
    routes,
    ImageViewerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
