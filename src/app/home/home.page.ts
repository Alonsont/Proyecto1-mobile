import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ApiRestService } from '../api-rest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  movies: any[] = [];
  userName: string = '';

  constructor(
    private apiRestService: ApiRestService,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.userName = localStorage.getItem('nombreUsuario') || '';
    this.presentToast('bottom', 'Bienvenido ' + this.userName);

    this.apiRestService.getTop100Movies().subscribe(
      (data: any) => {
        this.movies = data; 
        console.log(this.movies);
      },
      (error) => {
        console.error('Error al buscar películas:', error);
        this.presentToast('bottom', 'Error al buscar películas');
      }
    );
  }

  async presentToast(position: 'top' | 'middle' | 'bottom', message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: position,
    });
    toast.present();
  }
}