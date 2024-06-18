import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiUrl = 'http://localhost:8080/api/v1/usuarios'; 

  constructor(private http: HttpClient) { }

  getOne(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.apiUrl}/${id}`);
  }

  getAll(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiUrl);
  }

  save(usuario: Usuario): Observable<any> {
    return this.http.post(this.apiUrl, usuario);
  }

  update(id: number, usuario: Usuario): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, usuario);
  }

  alterarSenha(novaSenha: any): Observable<any> {
    return this.http.patch(`${this.apiUrl}/alterarSenha/`, novaSenha);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  login(credenciais: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login/`, credenciais);
  }
}
