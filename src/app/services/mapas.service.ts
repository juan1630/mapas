import { Injectable } from '@angular/core';
import { Marcador } from 'src/app/interfaces/marcador.interface';

@Injectable({
  providedIn: 'root'
})
export class MapasService {

  marcadores:Marcador[]=[];

  constructor() {  
   
    let nuevoMarcador:Marcador = {
      lat:18.812521,
      lng:-98.954329,
      titulo:"Centro de cuautla",
      draggable:true

    }


    this.marcadores.push(nuevoMarcador);
    
  }


  insertarMarcador( marcador:Marcador ){
    this.marcadores.push(marcador);
    this.guardaMarcadores()
    //actualiza el localSotorage

  }

  guardaMarcadores(){
    localStorage.setItem('marcadores', JSON.stringify(this.marcadores) )
  }

  cargarMarcadores(){
    if(localStorage.getItem('marcadores')){
      this.marcadores= JSON.parse(localStorage.getItem('marcadores'));
    }else{
      this.marcadores=[];
    }
  }
  

  borrarMarcador( i:number ){
    this.marcadores.splice(i,1);
    this.guardaMarcadores();
  }

}
