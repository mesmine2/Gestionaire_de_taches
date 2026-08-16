import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { TacheListComponent } from './components/tache-list/tache-list.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, TacheListComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}