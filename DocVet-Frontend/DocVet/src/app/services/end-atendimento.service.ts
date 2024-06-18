import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EndAtendimento } from '../models/end-atendimento.model';

@Injectable({
  providedIn: 'root'
})
export class EndAtendimentoService {

  private apiUrl = 'http://localhost:8080/api/v1/enderecos'; // Atualize com o URL correto da sua API

  constructor(private http: HttpClient) { }

  getOne(id: number): Observable<EndAtendimento> {
    return this.http.get<EndAtendimento>(`${this.apiUrl}/${id}`);
  }

  getAll(): Observable<EndAtendimento[]> {
    return this.http.get<EndAtendimento[]>(this.apiUrl);
  }

  save(endAtendimento: EndAtendimento): Observable<any> {
    return this.http.post(this.apiUrl, endAtendimento);
  }

  update(id: number, endAtendimento: EndAtendimento): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, endAtendimento);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}