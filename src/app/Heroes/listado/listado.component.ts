import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { log } from 'console';

@Component({
  selector: 'app-listado',
  imports: [CommonModule],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {

  heroes: string []= [ 'Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan America'];
  heroeBorrado : string = '';
  
  borrarHeroe  () {
    this.heroeBorrado =this .heroes.shift () || ''; 
     
  }
}
