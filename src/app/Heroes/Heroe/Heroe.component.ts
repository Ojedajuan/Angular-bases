import { Component } from "@angular/core";



@Component({
    selector: 'app-heroe',
    templateUrl: './Heroe.component.html',
    standalone: true
})
export class HeroeComponent{
    nombre: string = 'Ironman';
    edad: number = 45;

    get nombreCapitalizado(): string {
        return this.nombre.toUpperCase();
    }

    cambiarNombre(): void {
        this.nombre = 'Spiderman';
    
    }
    cambiarEdad(): void {
        this.edad = 30;
        
    }
    obtenerNombre(): void {
        this.nombre ='Spiderman'
         ;
}
  
    }