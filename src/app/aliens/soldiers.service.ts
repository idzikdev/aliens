import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Soldier} from './models/soldier';

@Injectable({
  providedIn: 'root'
})
export class SoldiersService {

  private apiUrl = 'http://54.37.138.230:8010/soldiers/v1';

  constructor(private http: HttpClient) { }

  getSoldiers(): Observable<Soldier[]> {
    return this.http.get(this.apiUrl)
      .pipe(map(aliens => aliens as Soldier[]));
  }

  getSoldier(id: number): Observable<Soldier> {
    return this.http.get(this.apiUrl + `/${id}`)
      .pipe(map((res) => res as Soldier));
  }

  addSoldier(data): Observable<Soldier> {
    return this.http.post(this.apiUrl, data)
      .pipe(map((res) => res as Soldier));
  }

  updateSoldier(id: number, data): Observable<Soldier> {
    return this.http.put(this.apiUrl + `/${id}`, data)
      .pipe(map((res) => res as Soldier));
  }

  removeSoldier(id: number): Observable<Soldier> {
    return this.http.delete(this.apiUrl + `/${id}`)
      .pipe(map((res) => res as Soldier));
  }
}
