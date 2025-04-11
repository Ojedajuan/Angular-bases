import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PersonajesComponent } from "../personajes/personajes.component";
import { Personaje } from '../Interface/dbz.interface';
import { AgregarComponent } from '../agregar/agregar.component';
import { DbzService } from '../Services/dbz.services';


@Component({
  imports: [CommonModule, FormsModule, PersonajesComponent, AgregarComponent],
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  providers: [DbzService]
})
export class MainPageComponent {
  nuevo: Personaje = {
  nombre: 'mAjin Buu',
  poder: 5000
};


 
constructor () {
  
  // this.dbzService = dbzService; // No es necesario asignar el servicio a una propiedad
  // this.personajes = this.dbzService.personajes; // No es necesario asignar los personajes a una propiedad
  // this.nuevo = this.dbzService.nuevo; // No es necesario asignar el nuevo personaje a una propiedad
}	

}
