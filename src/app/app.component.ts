import { Marcador } from 'src/app/interfaces/marcador.interface';
import { Component } from '@angular/core';
import { MapasService } from 'src/app/services/mapas.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mapas';

  lat: number = 18.812521;
  lng: number = -98.954329;
  zoom:number =16;
  marcadorSel:any=null;
  draggable:string="1";



  constructor( public _ms:MapasService ) {

    this._ms.cargarMarcadores();
  
   }

  clickMap( evento ){

  let nuevoMarcdor:Marcador = {
      lat:evento.coords.lat,
      lng:evento.coords.lng,
      titulo:"Sin titulo",
      draggable:true
    }

    this._ms.insertarMarcador(nuevoMarcdor);
    
  }

  clickMarcador( marcador:Marcador, i:number ){
      console.log(marcador, i);
      this.marcadorSel=marcador;

      if(this.marcadorSel.draggable){
        this.draggable="1";
      }else{
        this.draggable="0";
      }

  }

  dragEndMarcador( marcador:Marcador, evento ){
    
    let lat = evento.coords.lat;
    let lng = evento.coords.lng;
  
    marcador.lat=lat;
    marcador.lng=lng;

    //actualzamos las coordenadas

    this._ms.guardaMarcadores();

  }
  

  cambiarDraggable(){
      console.log(this.draggable);

      if( this.draggable === "1"){
        this.marcadorSel.draggable=true;
      }else{
        this.marcadorSel.draggable=false;
      }
  }


}
