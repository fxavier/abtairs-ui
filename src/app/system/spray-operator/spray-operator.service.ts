import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SprayOperator, District } from '../../model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SprayOperatorService {
  districtURL = 'http://localhost:8080/districts';
  sopURL = 'http://localhost:8080/sprayOperators';
  sprayOperator = new SprayOperator();
  constructor(private http: HttpClient) { }

  loadDistricts(): Observable<District[]> {
    const headers = new HttpHeaders()
    .append('Content-Type', 'application/json');
    return this.http.get<District[]>(`${this.districtURL}`, { headers })
    .pipe(map(response => response));
  }

  loadSprayOperators(): Observable<SprayOperator[]> {
    const headers = new HttpHeaders()
    .append('Content-Type', 'application/json');
    return this.http.get<SprayOperator[]>(`${this.sopURL}`, { headers })
    .pipe(map(response => response));
  }

  create(sprayOperator: SprayOperator): Observable<SprayOperator> {
    const headers = new HttpHeaders()
    .append('Content-Type', 'application/json');
    return this.http.post<SprayOperator>(`${this.sopURL}`, sprayOperator, { headers });
  }
}
