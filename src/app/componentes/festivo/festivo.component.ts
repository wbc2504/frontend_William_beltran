import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { FestivoService } from 'src/app/servicios/festivo.service';


@Component({
  selector: 'app-festivo',
  templateUrl: './festivo.component.html',
  styleUrls: ['./festivo.component.css']
})
export class FestivoComponent {
  public selectedFecha: Date = new Date();
  public modoColumna = ColumnMode;

  constructor(private festivoService: FestivoService, public dialogService: MatDialog)
  {}

  ngOnInit(): void {
    this.verificarFestivo();
  }

  public verificarFestivo(){
    const year = this.selectedFecha?.getFullYear()
    const day = this.selectedFecha?.getDate()
    const month = this.selectedFecha?.getMonth() + 1

    this.festivoService.verificarFestivo(year, month, day).subscribe(
      respuesta => {
        alert(respuesta)
      }
    );
  }
  public onActivate(event: any) {

  }
}
