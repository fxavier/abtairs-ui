
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OperationalSite } from '../../model';

@Injectable({
  providedIn: 'root'
})
export class OperationalsiteService {
  opsiteUrl = 'http://localhost:8080/opsites';
  constructor(private http: HttpClient) { }

  loadAll(): Observable<OperationalSite[]> {
    const headers = new HttpHeaders()
     .append('Content-Type', 'application/json');
    return this.http.get<OperationalSite[]>(`${this.opsiteUrl}?all`, { headers })
     .pipe(map(response => response));
  }

  create(operationalSite: OperationalSite): Observable<OperationalSite> {
      const headers = new HttpHeaders()
       .append('Content-Type', 'application/json');
      return this.http.post<OperationalSite>(`${this.opsiteUrl}`, operationalSite, { headers });
  }
}
