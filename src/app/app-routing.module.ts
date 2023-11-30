import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { FestivoComponent } from './componentes/festivo/festivo.component';
import { TipoComponent } from './componentes/tipo/tipo.component';

const routes: Routes = [
  { path: "tipo", component: TipoComponent },
  { path: "festivo", component: FestivoComponent },
  { path: "inicio", component: InicioComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
