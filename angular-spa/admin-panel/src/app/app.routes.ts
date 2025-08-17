import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TripsComponent } from './trips/trips.component';
import { UserComponent } from './users/users.component';

export const appRoutes: Routes = [
{ path: 'dashboard', component: DashboardComponent },
{ path: 'trips', component: TripsComponent },
{ path: 'users', component: UserComponent },
{ path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];