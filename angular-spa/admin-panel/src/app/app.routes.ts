import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TripsComponent } from './trips/trips.component';
import { UserComponent } from './users/users.component';
import { LoginComponent } from './login/login';
import { authGuard } from './auth-guard';

export const appRoutes: Routes = [
{ path: 'dashboard', component: DashboardComponent },
{ path: 'trips', component: TripsComponent },
{ path: 'users', component: UserComponent },
{ path: 'login', component: LoginComponent }, 
{ path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];