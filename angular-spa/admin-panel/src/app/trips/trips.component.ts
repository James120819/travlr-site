
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Trip } from './trip.model';
import { TripService } from './trip.service';

@Component({
  selector: 'app-trips',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './trips.html',
  styleUrls: ['./trips.css']
})
export class TripsComponent {
  private svc = inject(TripService);

  trips: Trip[] = [];
  // single form used for both add & edit
  form: Partial<Trip> = { name: '', continent: '', category: '', image: '', description: '' };
  editingId?: string;

  ngOnInit() {
    this.load();
  }

  load() {
    this.svc.getTrips().subscribe({
      next: (t) => (this.trips = t),
      error: (e) => console.error('[TripsComponent] load error', e)
    });
  }

  startAdd() {
    this.editingId = undefined;
    this.form = { name: '', continent: '', category: '', image: '', description: '' };
  }

  startEdit(t: Trip) {
    this.editingId = t._id!;
    this.form = {
      name: t.name,
      continent: t.continent,
      category: t.category,
      image: t.image,
      description: t.description
    };
  }

  save() {
    if (!this.form.name || !this.form.continent) return; // bare-min validation
    if (this.editingId) {
      this.svc.updateTrip(this.editingId, this.form as Trip).subscribe({
        next: () => this.afterSave(),
        error: (e) => console.error('[TripsComponent] update error', e)
      });
    } else {
      this.svc.createTrip(this.form as Omit<Trip, '_id'>).subscribe({
        next: () => this.afterSave(),
        error: (e) => console.error('[TripsComponent] create error', e)
      });
    }
  }

  remove(id: string) {
    if (!confirm('Delete this trip?')) return;
    this.svc.deleteTrip(id).subscribe({
      next: () => this.load(),
      error: (e) => console.error('[TripsComponent] delete error', e)
    });
  }

  cancel() {
    this.startAdd();
  }

  private afterSave() {
    this.startAdd();
    this.load();
  }
}
