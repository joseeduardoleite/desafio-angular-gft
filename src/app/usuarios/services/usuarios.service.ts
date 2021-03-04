import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API } from '../usuarios';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {
  private usuarioServer = "http://localhost:3000/usuarios";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'api.json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  get(): Observable<API[]> {
    return this.httpClient.get<API[]>(this.usuarioServer);
  }
}