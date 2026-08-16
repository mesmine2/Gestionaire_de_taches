
import { Component, output, signal } from '@angular/core';

@Component({
  selector: 'app-tache-form',
  imports: [],
  templateUrl: './tache-form.component.html',
  styleUrl: './tache-form.component.css'
})
export class TacheFormComponent {
  titreSaisi = signal('');
  ajouter = output<string>();

  onSubmit() {
    const titre = this.titreSaisi().trim();
    if (!titre) return;
    this.ajouter.emit(titre);
    this.titreSaisi.set('');
  }
}