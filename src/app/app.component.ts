import { Component } from '@angular/core';
import { RandomComponent } from './random/random.component';
import { ListComponent } from './list/list.component';

@Component({
  selector: 'app-root',
  imports: [RandomComponent, ListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  message = 'Witaj w aplikacji Angular!';
}
