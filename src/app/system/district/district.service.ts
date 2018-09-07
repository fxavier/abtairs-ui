import { District } from './../../model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DistrictService {
  districtUrl = 'http://localhost:8080/districts';
  constructor(private http: HttpClient) { }

  listaAll(): Observable<District[]> {
    const headers = new HttpHeaders()
       .append('Content-Type', 'application/json');
    return this.http.get<District[]>(`${this.districtUrl}`, { headers })
     .pipe(map(response => response));
  }

  create(district: District): Observable<District> {
    const headers = new HttpHeaders()
     .append('Content-Type', 'application/json');
    return this.http.post<District>(`${this.districtUrl}`, district, { headers });
  }
}
