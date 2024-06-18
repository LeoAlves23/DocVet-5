import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Convenio } from '../models/convenio.model';

@Injectable({
  providedIn: 'root'
})
export class ConvenioService {

  private apiUrl = 'http://localhost:8080/api/v1/convenios/';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Convenio[]> {
    return this.http.get<Convenio[]>(this.apiUrl);
  }

}
