import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Veterinario } from '../models/veterinario.model';

const url = 'http://localhost:8080/api/v1/veterinarios/'

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class VeterinarioService {

  constructor(private http: HttpClient) {}

  consultar (): Observable<Veterinario[]>{
    return this.http.get<Veterinario[]>(url);
  }

  consultarNome (nome: string): Observable<Veterinario[]>{
    const urlLocal = `${url}nome/${nome}`;
    return this.http.get<Veterinario[]>(urlLocal);
  }

  consultarPorId(id: number): Observable<Veterinario>{
    const urlLocal = `${url}/${id}`;
    return this.http.get<Veterinario>(urlLocal);
  }

  adicionar (Veterinario: Veterinario): Observable<Veterinario>{
    return this.http.post<Veterinario>(url, Veterinario, httpOptions);
  }

  alterar (id: number, Veterinario: Veterinario): Observable<any>{
    const urlLocal = `${url}/${id}`;
    return this.http.put(urlLocal, Veterinario, httpOptions);
  }

  excluir (id: number): Observable<Veterinario>{
    const urlLocal = `${url}/${id}`;
    return this.http.delete<Veterinario>(urlLocal, httpOptions);
  }

}
