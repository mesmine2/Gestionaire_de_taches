// src/app/services/tache.service.ts
import { Injectable, signal, computed, effect } from '@angular/core';
import { httpResource } from '@angular/common/http';
import { Tache } from '../models/tache';

const CLE_STOCKAGE = 'mes-taches';

@Injectable({ providedIn: 'root' })
export class TacheService {
  private readonly url = `/api/taches.json`;

  // Le "serveur" (fichier JSON local) — sert uniquement au tout premier chargement
  readonly tachesRes = httpResource<Tache[]>(() => this.url);

  // L'état réel de l'app, initialisé depuis localStorage s'il existe déjà
  private readonly _taches = signal<Tache[]>(this.chargerDepuisStockage());
  readonly taches = this._taches.asReadonly();
  readonly restantes = computed(() => this._taches().filter(t => !t.completed).length);

  private nextId = signal(9000);

  constructor() {
    // Première visite seulement : si localStorage est vide, on amorce avec le JSON
    effect(() => {
      const data = this.tachesRes.value();
      if (data && this._taches().length === 0) {
        this._taches.set(data);
      }
    });

    // À CHAQUE changement de la liste, on sauvegarde automatiquement
    effect(() => {
      localStorage.setItem(CLE_STOCKAGE, JSON.stringify(this._taches()));
    });
  }

  private chargerDepuisStockage(): Tache[] {
    try {
      const brut = localStorage.getItem(CLE_STOCKAGE);
      return brut ? JSON.parse(brut) : [];
    } catch {
      return [];
    }
  }

  ajouter(titre: string): void {
    const nouvelle: Tache = { id: this.nextId(), title: titre, completed: false };
    this._taches.update(liste => [nouvelle, ...liste]);
    this.nextId.update(n => n + 1);
  }

  basculerStatut(id: number): void {
    this._taches.update(liste =>
      liste.map(t => t.id === id ? { ...t, completed: !t.completed } : t)
    );
  }

  supprimer(id: number): void {
    this._taches.update(liste => liste.filter(t => t.id !== id));
  }

  reinitialiser(): void {
    localStorage.removeItem(CLE_STOCKAGE);
    this._taches.set(this.tachesRes.value() ?? []);
  }
}