// src/app/dono-do-pet.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DonoDoPet } from '../models/donodepet.model';


@Injectable({
  providedIn: 'root'
})
export class DonoDoPetService {
  getDonoDoPet() {
    throw new Error('Method not implemented.');
  }

  private apiUrl = 'http://localhost:8080/api/v1/dono-pets';
  constructor(private http: HttpClient) { }

  getAll(): Observable<DonoDoPet[]> {
    return this.http.get<DonoDoPet[]>(this.apiUrl);
  }

  getOne(id: number): Observable<DonoDoPet> {
    return this.http.get<DonoDoPet>(`${this.apiUrl}/${id}`);
  }

  create(donoDoPet: DonoDoPet): Observable<DonoDoPet> {
    return this.http.post<DonoDoPet>(this.apiUrl, donoDoPet);
  }

  update(id: number, donoDoPet: DonoDoPet): Observable<DonoDoPet> {
    return this.http.put<DonoDoPet>(`${this.apiUrl}/${id}`, donoDoPet);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
