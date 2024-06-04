import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  recommendedMovie: { title: string };
  movies: { title: string }[];

  constructor() {
    this.recommendedMovie = { title: 'Película Recomendada' };
    this.movies = [
      { title: 'Película 1' },
      { title: 'Película 2' },
      { title: 'Película 3' },
    ];
  }

  ngOnInit() {}
}
