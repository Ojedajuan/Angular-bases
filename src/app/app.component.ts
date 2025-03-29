import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContadorComponent } from './contador/contador/contador.component';
import { HeroeComponent } from './Heroes/Heroe/Heroe.component';
import { ListadoComponent } from "./Heroes/listado/listado.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [ContadorComponent]
})
export class AppComponent {
 
}