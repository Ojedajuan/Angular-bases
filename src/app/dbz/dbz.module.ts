import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainPageComponent } from './main-page/main-page.component';
import { format } from 'path';
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarComponent } from './agregar/agregar.component';
import { DbzService } from './Services/dbz.services';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, FormsModule,MainPageComponent, PersonajesComponent, AgregarComponent
  ],
  providers: [DbzService],
})
export class DbzModule { }
