import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Ship} from './models/ship';

@Injectable({
  providedIn: 'root'
})
export class ShipsService {
  private apiUrl = 'http://54.37.138.230:8010/ships/v1';
  private apiUrlShipByName = 'http://54.37.138.230:8010/tools/add/ship/v1/';

  constructor(private http: HttpClient) { }

  getShips(): Observable<Ship[]> {
    return this.http.get(this.apiUrl)
      .pipe(map(aliens => aliens as Ship[]));
  }

  getShip(id: number): Observable<Ship> {
    return this.http.get(this.apiUrl + `/${id}`)
      .pipe(map((res) => res as Ship));
  }

  addShip(data): Observable<Ship> {
    return this.http.post(this.apiUrl, data)
      .pipe(map((res) => res as Ship));
  }

  addShipByName(data): Observable<Ship> {
    const httpParams = new HttpParams().set('name', data);
    return this.http.post(this.apiUrlShipByName, httpParams)
      .pipe(map((res) => res as Ship));
  }

  updateShip(id: number, data): Observable<Ship> {
    return this.http.put(this.apiUrl + `/${id}`, data)
      .pipe(map((res) => res as Ship));
  }

  removeShip(id: number): Observable<Ship> {
    return this.http.delete(this.apiUrl + `/${id}`)
      .pipe(map((res) => res as Ship));
  }
}
