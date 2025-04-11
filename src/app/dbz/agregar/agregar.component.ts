import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DbzService } from '../Services/dbz.services';
import { Personaje } from '../Interface/dbz.interface';

@Component({
  selector: 'app-agregar',
  imports: [FormsModule, CommonModule],
  templateUrl: './agregar.component.html',

})
export class AgregarComponent {


  @Input()
  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  constructor(private dbzService: DbzService) {
    
    
    // this.nuevo = this.dbzService.nuevo; // No es necesario asignar el nuevo personaje a una propiedad

  }
  //@Output() onNuevoPersonaje: EventEmitter< Personaje >= new EventEmitter();
  agregar(  ) {
    if (this.nuevo.nombre.trim().length === 0) {return;}
   // this.onNuevoPersonaje.emit(this.nuevo);
    this.dbzService.agregarPersonaje(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }
}
