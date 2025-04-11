import { Component } from '@angular/core';
import { MainPageComponent } from './dbz/main-page/main-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
 imports: [MainPageComponent]
})
export class AppComponent {
 
}