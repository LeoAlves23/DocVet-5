import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TipoAnimal } from '../models/tipo-animal.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoAnimalService {

  private apiUrl = 'http://localhost:8080/api/v1/tipoanimal/'; // Atualize com o URL correto da sua API

  constructor(private http: HttpClient) { }

  getOne(id: number): Observable<TipoAnimal> {
    return this.http.get<TipoAnimal>(`${this.apiUrl}/${id}`);
  }

  getAll(): Observable<TipoAnimal[]> {
    return this.http.get<TipoAnimal[]>(this.apiUrl);
  }

  save(tipoAnimal: TipoAnimal): Observable<any> {
    return this.http.post(this.apiUrl, tipoAnimal);
  }

  update(id: number, tipoAnimal: TipoAnimal): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, tipoAnimal);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
