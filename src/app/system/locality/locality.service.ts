import { District, OperationalSite, Locality } from './../../model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { URLSearchParams } from 'url';

@Injectable({
  providedIn: 'root'
})
export class LocalityService {
  districtUrl = 'http://localhost:8080/districts';
  opSiteUrl = 'http://localhost:8080/opsites';
  localityUrl = 'http://localhost:8080/localities';
  constructor(private http: HttpClient) { }

  listAllDistricts(): Observable<District[]> {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json');
    return this.http.get<District[]>(`${this.districtUrl}`, { headers })
    .pipe(map(response => response));
  }

  searchOpSitesByDistrict(district): Observable<OperationalSite[]> {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json');
    const params = new HttpParams()
      .append('district', district);
   return this.http.get<OperationalSite[]>(`${this.opSiteUrl}`, {
     headers, params
   }).pipe(map(response => response));
  }

  loadAllLocalities(): Observable<Locality[]> {
    const headers = new HttpHeaders()
    .append('Content-Type', 'application/json');
    return this.http.get<Locality[]>(`${this.localityUrl}?all`, { headers })
    .pipe(map(response => response));
  }

  create(locality: Locality): Observable<Locality> {
    const headers = new HttpHeaders()
    .append('Content-Type', 'application/json');
    return this.http.post<Locality>(`${this.localityUrl}`, locality, { headers });
  }

}
