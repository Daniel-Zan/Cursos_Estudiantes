import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CursoResponse } from '../modelos/curso-response';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor(private http: HttpClient) { }

  all ():Observable<CursoResponse> {
    return this.http.get<CursoResponse>('http://localhost:3001/api/v1/getPersonas')
  }
}
