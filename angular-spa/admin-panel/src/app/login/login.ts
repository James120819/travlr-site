import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    this.http.post<any>('http://localhost:3000/api/login', {
      username: this.username,
      password: this.password
    }).subscribe({
      next: (res) => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        alert('Login failed. Check your credentials.');
        console.error(err);
      }
    });
  }
}