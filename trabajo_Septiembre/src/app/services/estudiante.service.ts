import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'
import { EstudianteResponse } from '../models/estudiante-response';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  constructor( private http: HttpClient) { }

  all(): Observable<EstudianteResponse>{
    return this.http.get<EstudianteResponse>('http://localhost:3001/api/v1/getPersonas');
  }
}
