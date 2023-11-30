import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Festivo } from '../entidades/festivo';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class TipoService {

  url: string;

  constructor(private http: HttpClient) {  // Patrón de inyeccion de dependencias
    this.url = `${environment.urlAPI}festivos`; //se llama la variable de URL de la API ` Se utiliza pra concatenar la URL API con el contexto

  }

  public obtenerFestivos(año: number): Observable<Festivo[]> {  //Metodo asincrono (observable)
    let urlT = `${this.url}/obtener/${año}`;
    return this.http.get<Festivo[]>(urlT);
  }
}
