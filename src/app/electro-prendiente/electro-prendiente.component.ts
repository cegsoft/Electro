import { Component, OnInit } from '@angular/core';
import { ServiseService } from '../servise/servise.service';
import { Electro } from '../model/electroInterface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-electro-prendiente',
  templateUrl: './electro-prendiente.component.html',
  styleUrls: ['./electro-prendiente.component.css']
})
export class ElectroPrendienteComponent implements OnInit {

  electroList:  Observable<Electro[]>;
  llenarInforme = false;
  constructor(private electroServer: ServiseService) { }
  electroSeleccionado: Electro = {} as Electro;

  ngOnInit() {
      this.buscarElectrosPendientes();
  }

  buscarElectrosPendientes() {
    // this.electroServer.geAlltElectro().subscribe(elect => {
    //   console.log(elect);
    //   this.electroList = elect;
    //      });
    this.electroList  = this.electroServer.geAlltElectroNoInformados('0');
  }



  informe(p: Electro) {
      this.electroSeleccionado = p;
      this.llenarInforme = true;
  }

  cerrarLlenarInforme() {
    this.llenarInforme = false;
  }

  eliminar(tem) {
    this.electroServer.eliminar(tem);

  }



}
