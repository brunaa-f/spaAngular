import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './navegacao/menu/menu.component';
import { HomeComponent } from './navegacao/home/home.component';
import { FooterComponent } from './navegacao/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MenuComponent,
    HomeComponent,
    FooterComponent
],

  templateUrl: 'app.component.HTML',
  styles: [],
})
export class AppComponent {
  title = 'MeuProjeto';
}
