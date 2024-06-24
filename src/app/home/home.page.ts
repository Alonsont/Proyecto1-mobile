import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  userName!: string | null;
  recommendedMovie: { title: string };
  movies: { title: string }[];

  constructor(private authService: AuthService, private toastController: ToastController) {
    
    this.recommendedMovie = { title: 'Película Recomendada' };
    this.movies = [
      { title: 'Película 1' },
      { title: 'Película 2' },
      { title: 'Película 3' },
    ];
    
  }
  

  ngOnInit() {
    this.userName = localStorage.getItem('nombreUsuario');
    this.presentToast('bottom', 'Bienvenido '+ this.userName)
    
  }

async presentToast(position: 'top' | 'middle' | 'bottom', msj: string) {
  const toast = await this.toastController.create({
    message: msj,
    duration: 2000,
    position: position,
  });
}
}
