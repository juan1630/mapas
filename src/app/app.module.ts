import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';


import { MapasService } from 'src/app/services/mapas.service';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyCn2YA96kDTaKhTQePpEt8bpNf_9QVYJnU'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// 