import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { HeroeComponent } from './Heroes/Heroe/Heroe.component';
import { ListadoComponent } from './Heroes/listado/listado.component';
import { HeroesModule } from './Heroes/heroes.modulo';
import { ContadorModule } from './contador/ContadorModule';

@NgModule({
    declarations: [
    ],
    imports: [
        BrowserModule,
        ContadorModule,
        HeroeComponent,
        ListadoComponent,
        AppComponent,
        HeroesModule,
    ],
    providers: [],
    // Removed bootstrap array as AppComponent is standalone
    })
    export class AppModule { }



