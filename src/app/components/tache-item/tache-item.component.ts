
import { Component, input, output } from '@angular/core';
import { Tache } from '../../models/tache';

@Component({
  selector: 'app-tache-item',
  imports: [],
  templateUrl: './tache-item.component.html',
  styleUrl: './tache-item.component.css'
})
export class TacheItemComponent {
  tache = input.required<Tache>();

  toggle = output<number>();
  supprimer = output<number>();

  onToggle() {
    this.toggle.emit(this.tache().id);
  }

  onSupprimer() {
    this.supprimer.emit(this.tache().id);
  }
}