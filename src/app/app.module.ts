import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { AddComponent } from './counter/add/add.component';
import { RestComponent } from './counter/rest/rest.component';
//import { ContadorComponent } from './contador/contador/contador.component';
import { heroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';
//import { HeroeComponent } from './heroes/heroe/heroe.component';
//import { ListadoComponent } from './heroes/listado/listado.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    AddComponent,
    RestComponent,
   // ContadorComponent,
  //  HeroeComponent,
   // ListadoComponent
  ],
  imports: [
    BrowserModule,
    heroesModule,
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
