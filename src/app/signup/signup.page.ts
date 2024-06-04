import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {
  email!: string;
  password!: string;

  constructor(private router: Router) {}

  onSignUp() {
    // Implementar lógica de registro
    if (this.email && this.password) {
      console.log('Email:', this.email);
      console.log('Password:', this.password);
      this.router.navigate(['/home']);
    }
  }
}