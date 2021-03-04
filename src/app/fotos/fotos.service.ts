import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API } from '../usuarios/usuarios';

@Injectable({
  providedIn: 'root'
})

export class FotoService {
  private fotoServer = "http://localhost:3000/photos";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'api.json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  get(): Observable<API[]> {
    return this.httpClient.get<API[]>(this.fotoServer + "/");
  }
}