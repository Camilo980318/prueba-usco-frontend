import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  // Almacenamos la información que viene del main, para tomarla en el dashboard
  codigoEstudiante: String;
  dataLine: any[] = [];

  URL_API: String = "http://localhost:8090/api";

  constructor(public http: HttpClient) { }

  //Obtenemos la información del estudiante
  getDataEstudiante(codigo: String) {
    let url = `${this.URL_API}/estudiante/${codigo}`;
    return this.http.get(url);
  }

  // Obtenemos la informcación de los semestres
  getDataSemestres() {
    let url = `${this.URL_API}/semestre`;
    return this.http.get(url);
  }


}
