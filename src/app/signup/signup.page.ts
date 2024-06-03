import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSignUp() {
    // Aquí añadirías la lógica de creación de cuenta.
    // Si es correcta:
    this.router.navigate(['/home']);
  }
}