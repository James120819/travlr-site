// angular-spa/admin-panel/src/app/trips/trip.service.ts
import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Trip } from './trip.model';

@Injectable({ providedIn: 'root' })
export class TripService {
  private http = inject(HttpClient);
  private baseUrl = '/api/trips';
  private json = new HttpHeaders({ 'Content-Type': 'application/json' });

  getTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.baseUrl)
      .pipe(catchError(this.handleError('getTrips')));
  }

  getTrip(id: string): Observable<Trip> {
    return this.http.get<Trip>(`${this.baseUrl}/${id}`)
      .pipe(catchError(this.handleError('getTrip')));
  }

  createTrip(trip: Omit<Trip, '_id'>): Observable<Trip> {
    return this.http.post<Trip>(this.baseUrl, trip, { headers: this.json })
      .pipe(catchError(this.handleError('createTrip')));
  }

  updateTrip(id: string, trip: Partial<Trip>): Observable<Trip> {
    return this.http.put<Trip>(`${this.baseUrl}/${id}`, trip, { headers: this.json })
      .pipe(catchError(this.handleError('updateTrip')));
  }

  deleteTrip(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`)
      .pipe(catchError(this.handleError('deleteTrip')));
  }

  private handleError(op: string) {
    return (err: any) => {
      console.error(`[TripService] ${op} failed`, err);
      return throwError(() => err);
    };
  }
}
