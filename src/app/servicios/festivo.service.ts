import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FestivoService {

  public verificarFestivo(year: number, month : number, day : number){
    let urlT = `${this.url}/verificar/${year}/${month}/${day}`;
    return this.http.get(urlT, { responseType: 'text'});
  }
  url: string;
  constructor(private http: HttpClient) {
    this.url = `${environment.urlAPI}festivos`;
   }
}
