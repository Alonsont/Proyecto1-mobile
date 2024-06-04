import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  userName!: string | null;
  recommendedMovie: { title: string };
  movies: { title: string }[];

  constructor(private authService: AuthService) {
    this.userName = this.authService.getUserName();
    this.recommendedMovie = { title: 'Película Recomendada' };
    this.movies = [
      { title: 'Película 1' },
      { title: 'Película 2' },
      { title: 'Película 3' },
    ];
    
  }
  

  ngOnInit() {}
}
