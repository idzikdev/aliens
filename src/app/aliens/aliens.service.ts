import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Alien} from './models/alien';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AliensService {
  private apiUrl = 'http://54.37.138.230:8010/aliens/v1';

  constructor(private http: HttpClient) { }

  getAliens(): Observable<Alien[]> {
    return this.http.get(this.apiUrl)
      .pipe(map(aliens => aliens as Alien[]));
  }

  getAlien(id: number): Observable<Alien> {
    return this.http.get(this.apiUrl + `/${id}`)
      .pipe(map((res) => res as Alien));
  }

  addAlien(data): Observable<Alien> {
    return this.http.post(this.apiUrl, data)
      .pipe(map((res) => res as Alien));
  }

  updateAlien(id: number, data): Observable<Alien> {
    return this.http.put(this.apiUrl + `/${id}`, data)
      .pipe(map((res) => res as Alien));
  }

  removeAlien(id: number): Observable<Alien> {
    return this.http.delete(this.apiUrl + `/${id}`)
      .pipe(map((res) => res as Alien));
  }
}
