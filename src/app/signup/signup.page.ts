import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {
  email: string = '';
  password: string = '';
  name: string = '';
  user: string = '';
  errorMessage: string | null = null;

  constructor(private router: Router, private authService: AuthService, private alertController: AlertController) { }



  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Mensaje',
      message: message,
      buttons: ['OK']
    });
  }


  guardar() {
    if (this.user.trim() === '' || this.password.trim() === '') {
      this.presentAlert('Error: usuario o contraseña vacios');
    }else {
      this.guardarDatos();
      this.router.navigate(['/home']);
    }
  }

  guardarDatos() {
    this.authService.crearUsuario(this.user, this.name, this.password, this.email)
    .then(() => {
      this.presentAlert('Usuario creado exitosamente');
    })
    .catch(error => {
      this.presentAlert('Error al guardar datos' + error);
    })
  }


  
}
