
import { Component, inject } from '@angular/core';
import { TacheService } from '../../services/tache.service';
import { TacheItemComponent } from '../tache-item/tache-item.component';
import { TacheFormComponent } from '../tache-form/tache-form.component';

@Component({
  selector: 'app-tache-list',
  imports: [TacheItemComponent, TacheFormComponent],
  templateUrl: './tache-list.component.html',
  styleUrl: './tache-list.component.css'
})
export class TacheListComponent {
  private readonly tacheService = inject(TacheService);

  readonly taches = this.tacheService.taches;
  readonly restantes = this.tacheService.restantes;
  readonly tachesRes = this.tacheService.tachesRes;

  onAjouter(titre: string) {
    this.tacheService.ajouter(titre);
  }

  onToggle(id: number) {
    this.tacheService.basculerStatut(id);
  }

  onSupprimer(id: number) {
    this.tacheService.supprimer(id);
  }
  onReinitialiser() {
  this.tacheService.reinitialiser();
}
}