import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiRestService {
  private apiUrl = 'https://imdb-top-100-movies.p.rapidapi.com/';

  private rapidApiKey = '';
  private rapidApiHost = 'imdb-top-100-movies.p.rapidapi.com';

  constructor(private http: HttpClient) { }

  getTop100Movies(): Observable<any> {
    const headers = new HttpHeaders({
      'x-rapidapi-key': this.rapidApiKey,
      'x-rapidapi-host': this.rapidApiHost
    });

    return this.http.get(this.apiUrl, { headers });
  }
}