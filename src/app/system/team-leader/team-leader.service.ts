import { District, TeamLeader } from './../../model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TeamLeaderService {
  districtURL = 'http://localhost:8080/districts';
  teamLeaderURL = 'http://localhost:8080/teamleaders';
  constructor(private http: HttpClient) { }

  loadDistricts(): Observable<District[]> {
    const headers = new HttpHeaders()
    .append('Content-Type', 'application/json');
    return this.http.get<District[]>(`${this.districtURL}`, { headers })
    .pipe(map(response => response));
  }

  loadTeamLeaders(): Observable<TeamLeader[]> {
    const headers = new HttpHeaders()
    .append('Content-Type', 'application/json');
    return this.http.get<TeamLeader[]>(`${this.teamLeaderURL}`, { headers })
    .pipe(map(response => response));
  }

  create(teamLeader: TeamLeader): Observable<TeamLeader> {
    const headers = new HttpHeaders()
    .append('Content-Type', 'application/json');
    return this.http.post<TeamLeader>(`${this.teamLeaderURL}`, teamLeader, { headers });
  }

}
