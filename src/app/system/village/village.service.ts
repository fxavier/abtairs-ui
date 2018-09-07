import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { LocalityService } from './../locality/locality.service';
import { Injectable } from '@angular/core';
import { District, OperationalSite, Locality, Village } from '../../model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VillageService {

  districtURL = 'http://localhost:8080/districts';
  operationalSiteURL = 'http://localhost:8080/opsites';
  localityURL = 'http://localhost:8080/localities';
  villageURL = 'http://localhost:8080/villages';
  constructor(private http: HttpClient) { }

 loadDisctricts(): Observable<District[]> {
  const headers = new HttpHeaders()
  .append('Content-Type', 'application/json');
  return this.http.get<District[]>(`${this.districtURL}`, { headers })
   .pipe(map(response => response));
 }

 loadOperationalSites(district): Observable<OperationalSite[]> {
   const headers = new HttpHeaders()
   .append('Content-Type', 'application/json');
   const params = new HttpParams()
   .append('district', district);
   return this.http.get<OperationalSite[]>(`${this.operationalSiteURL}`, {
     headers, params
   }).pipe(map(response => response));
 }

 loadLocalitiesByOpsites(operationalSite): Observable<Locality[]> {
   const headers = new HttpHeaders()
   .append('Content-Type', 'application/json');
   const params = new HttpParams()
   .append('operationalSite', operationalSite);
   return this.http.get<Locality[]>(`${this.localityURL}`, {
     headers, params
   }).pipe(map(response => response));
 }

 loadAllVillages(): Observable<Village[]> {
   const headers = new HttpHeaders()
   .append('Content-Type', 'application/json');
   return this.http.get<Village[]>(`${this.villageURL}?all`, { headers })
   .pipe(map(response => response));
 }

 create(village): Observable<Village> {
  const headers = new HttpHeaders()
   .append('Content-Type', 'application/json');
   return this.http.post<Village>(`${this.villageURL}`, village, { headers });
 }

}
