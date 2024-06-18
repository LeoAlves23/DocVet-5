import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Estado } from '../models/estado.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  private apiUrl = 'http://localhost:8080/api/v1/estados'; 

  constructor(private http: HttpClient) { }

  getAll(): Observable<Estado[]> {
    return this.http.get<Estado[]>(this.apiUrl);
  }

  getOne(id: number): Observable<Estado> {
    return this.http.get<Estado>(`${this.apiUrl}/${id}`);
  }

  save(estado: Estado): Observable<Estado> {
    return this.http.post<Estado>(this.apiUrl, estado);
  }

  update(id: number, estado: Estado): Observable<Estado> {
    return this.http.put<Estado>(`${this.apiUrl}/${id}`, estado);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}