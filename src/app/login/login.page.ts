import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  user: string = '';
  password: string = '';
  errorMessage: string | null = null;

  constructor(private router: Router, private authService: AuthService) { }

  
  ingresar() {
    this.authService.validarUsuario(this.user, this.password).then((usuario) => {
      if (usuario) {
        
        this.router.navigate(['/home']);
        localStorage.setItem('nombreUsuario', usuario.nombre);
      } else {
        
        this.authService.presentToast('Credenciales incorrectas.');
      }
    }).catch(error => {
      this.authService.presentToast('Error durante el login: ' + error);
    });
  }
}

