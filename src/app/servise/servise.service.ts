import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask} from '@angular/fire/storage';
import { Electro } from '../model/electroInterface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiseService {
  electro: Observable<Electro[]> ;
  electroUnico: Electro;
  electroctColection: AngularFirestoreCollection<Electro>;
  electrotDoc: AngularFirestoreDocument<Electro>;
  linkImagen = 'no encontrado';
  imagenes: Observable<string>;
  downloadURL: Observable<string>;
  uploadPercent: Observable<number>;

  task: AngularFireUploadTask;
  refAlmacen: AngularFireStorageReference;



  constructor(private db: AngularFirestore, private almacenamiento: AngularFireStorage) {

    this.electroctColection =  this.db.collection('electro');

  }


  getAllElectroConID() {

    this.electro =  this.electroctColection.snapshotChanges().pipe(map(action => {
      return action.map(a => {
        const data =   a.payload.doc.data() as Electro;
          data.id = a.payload.doc.id;
          return data;
      });
    }));

    return this.electro;
  }

    geAlltElectro() {
      return   <Observable<Electro[]>> this.electroctColection.valueChanges();
    }

    geAlltElectroNoInformados(tipo) {
      return    <Observable<Electro[]>>
       this.db.collection('electro' , ref => ref.where('informado', '==', tipo)).valueChanges();
    }

    geAlltElectroInformados() {
      return    <Observable<Electro[]>>
       this.db.collection('electro' , ref => ref.where('informado', '>', '0')
          .where('informado', '<', '3')).valueChanges();
    }


    getElectroUnico(id) {
    return this.db.collection('electro').doc(id).valueChanges();
    }



  eliminar(e: Electro) {

    const img = e.id;

    this.electroctColection.doc(e.id).delete().then(function() {
      alert('Documento eliminado!');
    }).catch(function(error) {
      alert('Error al eliminar el documento: ' + error);
    });


    this.almacenamiento.ref('').child(`electro/${img}`).delete().then().error();




  }


  agregarElectro(e: Electro, imagen) {
    // this.electroctColection.add(e);
    const randomId = Math.random().toString(36).substring(2);

    e.imagen = randomId + '.jpg';
    e.id = randomId;
    this.electroctColection.doc(randomId).set(e);


    const filepath = `electro/${randomId}`;



    const ref = this.almacenamiento.ref(filepath);

    const almacenar = this.almacenamiento.upload(filepath, imagen);



    return almacenar;



    // this.almacenamiento.ref(filepath).put(imagen);

  }



  editar(e: Electro) {
    this.electrotDoc = this.db.doc(`electro/${e.id}`);
    this.electrotDoc.update(e);
  }

// imagen
  cargarImagen(id) {
        return this.almacenamiento.ref(`electro/${id}`);
  }





}
