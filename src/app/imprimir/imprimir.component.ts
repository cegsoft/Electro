import { Component, OnInit } from '@angular/core';
import * as jspdf from 'jspdf';
import { ServiseService } from '../servise/servise.service';
import { Electro } from '../model/electroInterface';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-imprimir',
  templateUrl: './imprimir.component.html',
  styleUrls: ['./imprimir.component.css']
})
export class ImprimirComponent implements OnInit {

  electroList:  Observable<Electro[]>;

  constructor(private electroServer: ServiseService) { }


  ngOnInit() {
    this.buscarElectro();
}

buscarElectro() {
  // this.electroServer.geAlltElectro().subscribe(elect => {
  //   console.log(elect);
  //   this.electroList = elect;
  //      });
  this.electroList  = this.electroServer.geAlltElectroInformados();
}



imprimir(p: Electro) {
    this.descargar(p);
    p.informado = '2';
    p.fechaInImpresion = new Date;
    this.electroServer.editar(p);

}

confirmar(p: Electro) {
  // cuando tiene valor 2 es que ya esta impreso y confirmado
  p.informado = '3';
  this.electroServer.editar(p);
}

  descargar(p: Electro) {

    const doc = new jspdf('p' , 'mm' , 'letter');
    doc.setFontSize(20);
    doc.text('Centro Médico Caridad del Cobre', 60, 10);
    doc.text('Santa Raquel 9877, La Florida', 60, 20);
    doc.text('Fono: 2 2291 8050', 60, 30);
    doc.line( 0, 35, 300, 35 );

    doc.setFontSize(18);
    doc.text('Datos del paciente' , 77, 42);
    doc.line( 0, 44, 300, 45 );

    const resta = 7;

    const f = new Date(p.fecha.toDate());
    doc.setFontSize(14);
    doc.text('Nombre:        ' + p.nombre, 20, 62 - resta);
    doc.text('Rut:               ' + p.rut, 20, 69 - resta);
    doc.text('Edad:            ' + p.edad + ' Años', 20, 76 - resta);
    doc.text('Fecha:          ' + f.getDate() + '-' + (f.getMonth() + 1) + '-' + f.getFullYear() , 20, 83 - resta);

    doc.line( 0, 90, 300, 90 );


    doc.setFontSize(18);
    doc.text('Informe Electrocardiograma' , 77, 100);


    doc.setFontSize(14);
    const lines = doc.splitTextToSize( p.informe, 180);
    doc.text(lines, 20, 112);

    doc.save('prueba.pdf');
  }
}
