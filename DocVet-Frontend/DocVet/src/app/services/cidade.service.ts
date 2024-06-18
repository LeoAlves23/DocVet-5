import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cidade } from '../models/cidade.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CidadeService {

  private apiUrl = 'http://localhost:8080/api/v1/cidades'; 

  constructor(private http: HttpClient) { }

  getAll(): Observable<Cidade[]> {
    return this.http.get<Cidade[]>(this.apiUrl);
  }

  getOne(id: number): Observable<Cidade> {
    return this.http.get<Cidade>(`${this.apiUrl}/${id}`);
  }

  create(cidade: Cidade): Observable<Cidade> {
    return this.http.post<Cidade>(this.apiUrl, cidade);
  }

  update(id: number, cidade: Cidade): Observable<Cidade> {
    return this.http.put<Cidade>(`${this.apiUrl}/${id}`, cidade);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}