import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { Festivo } from 'src/app/entidades/festivo';
import { TipoService } from 'src/app/servicios/tipo.service';

@Component({
  selector: 'app-tipo',
  templateUrl: './tipo.component.html',
  styleUrls: ['./tipo.component.css']
})
export class TipoComponent {
   
  public textoListar: string ="";
  public festivos: Festivo[] = [];

  public columnas = [
    { name: "Festivo", prop: "nombre" },
    { name: "Fecha", prop: "fecha" },
  ];
  public modoColumna = ColumnMode;

  constructor(private tipoService: TipoService, public dialogService: MatDialog)
  {}

  ngOnInit(): void {
    this.obtenerFestivos();
  }

  public obtenerFestivos() {
    this.tipoService.obtenerFestivos(parseInt(this.textoListar)).subscribe(
      respuesta => {                         // asincrono, despues de esta instruccion no se puede programar mas nada dentro del mtdo.
        this.festivos = respuesta;
      }
    );
  }

  public onActivate(event: any) {

  }

}
