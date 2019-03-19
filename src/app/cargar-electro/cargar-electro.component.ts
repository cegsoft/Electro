import { Component, OnInit } from '@angular/core';
import { ServiseService } from '../servise/servise.service';
import { Electro } from '../model/electroInterface';
import { Rut } from '../model/rut';



@Component({
  selector: 'app-cargar-electro',
  templateUrl: './cargar-electro.component.html',
  styleUrls: ['./cargar-electro.component.css']
})
export class CargarElectroComponent implements OnInit {

  electroList: Array<Electro> = new Array;
  electroOBJ: Electro = {} as Electro;
  electroOBJTem: Electro = {} as Electro;
  archivoSeleccionado = null;
  imagenes = new Array();
  con = 0;
  urgencia: Boolean = false;
  rut = new Rut();
  btnGuardar: Boolean = false;

  constructor(private electroServer: ServiseService ) { }

  ngOnInit() {

    //  this.electro.getAllElectroConID().subscribe(elect => {
    //   this.electroList = elect;
    //   console.log(this.electroList[0].id);
      // });


  }

  addElectro() {

    this.electroOBJ.urgencia = this.urgencia ? 'Si' : 'No';
     this.electroOBJ.fecha = new Date();
     this.electroOBJ.fechaInforme = new Date();
     this.electroOBJ.fechaInImpresion = new Date();
     this.electroOBJ.informado = '0';
    this.btnGuardar = true;

    if (this.archivoSeleccionado !== null) {

     this.electroServer.agregarElectro(this.electroOBJ, this.archivoSeleccionado).then(snapshot => {
      return snapshot.ref.getDownloadURL();
    })
  .then(downloadURL => {
     console.log(`Successfully uploaded file and got download link - ${downloadURL}`);
     this.electroOBJTem.linkImagen  = downloadURL;
     this.electroList.push(this.electroOBJTem);
     this.btnGuardar = false;
     return downloadURL;
  })

  .catch(error => {
    // Use to signal error if something goes wrong.
    this.btnGuardar = false;
    alert('error');
    console.log(`Failed to upload file and get link - ${error}`);
 });

    this.electroOBJ.imagen = this.archivoSeleccionado;
    this.electroOBJTem = this.electroOBJ;
    this.limpiar();
    this.con++;

  } else {
    alert('Seleccione una imagen');
  }


  }


  cargar(event) {
    this.archivoSeleccionado = event.target.files[0];
    this.btnGuardar = false;
    }



  limpiar() {
    this.electroOBJ = {} as Electro;
    this.archivoSeleccionado = null;
  }


  nombreMayuscula() {
      if (this.electroOBJ.nombre != null) {
      this.electroOBJ.nombre =
      this.convertirAMayuscula(this.electroOBJ.nombre);
    }
  }


  convertirAMayuscula(string) {
    let arrayWords = '';
    let returnString = '';
    let len;
    string = string.trim();
    arrayWords = string.split(' ');
    len = arrayWords.length;

    for ( let i = 0 ; i  < len ; i++ ) {
     if (  i !== (len - 1 )) {
      returnString = returnString + this.ucFirst(arrayWords[ i ]) + ' ';
     }   else {
      returnString = returnString + this.ucFirst (arrayWords[i]);
     }
    }
    return returnString;
   }

   ucFirst(string) {
    return string.substr(0, 1).toUpperCase() + string.substr(1 , string.length).toLowerCase();
   }


   probarRurContratante() {
    if (this.electroOBJ.rut != null) {
      this.electroOBJ.rut = this.electroOBJ.rut.trim();
        if (this.electroOBJ.rut !== '') {
            if (this.rut.validarRut(this.electroOBJ.rut) === true) {
              this.electroOBJ.rut = this.rut.ponerPunto(this.electroOBJ.rut);

            } else {

              alert('Rut incorrecto');
              this.electroOBJ.rut = this.rut.quitarPuntos(this.electroOBJ.rut);
            }

          }
  }

  }



















}
