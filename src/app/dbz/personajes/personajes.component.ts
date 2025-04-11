import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Personaje } from '../Interface/dbz.interface';
import { DbzService } from '../Services/dbz.services';


@Component({
  selector: 'app-personajes',
  imports: [[CommonModule]],
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent {

 // @Input () personajes: Personaje[] = [];
 get personajes(): Personaje[] {
  return this.dbzService.personajes;}
  
constructor ( private dbzService: DbzService) {}	
}
