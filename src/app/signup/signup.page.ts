import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {
  email: string = '';
  password: string = '';
  name: string = '';
  errorMessage: string | null = null;

  constructor(private router: Router, private authService: AuthService) { }

  signup() {
    if (this.authService.signup(this.email, this.password, this.name)) {
      this.router.navigate(['/home']);
    } else {
      this.errorMessage = 'El email ya está en uso';
    }
  }
}
