import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import {  } from '../model/electroInterface';
import { Electro } from '../model/electroInterface';
import { ServiseService } from '../servise/servise.service';
import { Url } from 'url';

@Component({
  selector: 'app-llenar-electro',
  templateUrl: './llenar-electro.component.html',
  styleUrls: ['./llenar-electro.component.css']
})
export class LlenarElectroComponent implements OnInit, OnChanges {
@Input() electro: Electro;
url: Url;
image = ['http://campusvirtual.sems.udg.mx/img/cargando.gif'];
@Output() visible = new EventEmitter();


ngOnChanges() {

}

  constructor(private server: ServiseService) { }

  ngOnInit() {

    this.buscarIMG();

  }

  buscarIMG() {
    this.server.cargarImagen(`${this.electro.id}`).getDownloadURL().subscribe(i => {
      this.url = i;  this.image = [i];  });

  }


  guardar() {
    if (this.electro.informe.length > 1) {
      this.electro.fechaInforme = new Date();
      this.electro.informado = '1';
    }
    this.server.editar(this.electro);
    this.regresar();
  }

  cancelar() {
    this.regresar();
  }

  regresar() {
    this.visible.emit();
  }







}
