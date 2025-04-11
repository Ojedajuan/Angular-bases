import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';


import { HeroeComponent } from './Heroes/Heroe/Heroe.component';
import { ListadoComponent } from './Heroes/listado/listado.component';
import { HeroesModule } from './Heroes/heroes.modulo';
import { ContadorModule } from './contador/ContadorModule';
import { DbzModule } from './dbz/dbz.module';
import { AgregarComponent } from './dbz/agregar/agregar.component';
import { DbzService } from './dbz/Services/dbz.services';

@NgModule({
    declarations: [
    ],
    imports: [
        AgregarComponent,
        FormsModule,
        DbzModule,
        BrowserModule,
        ContadorModule,
        HeroeComponent,
        ListadoComponent,
        AppComponent,
        HeroesModule,
    ],

    // Removed bootstrap array as AppComponent is standalone
    })
    export class AppModule { }



