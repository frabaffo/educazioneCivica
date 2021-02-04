import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GrafoComponent } from './grafo/grafo.component';
import { HomeComponent } from './home/home.component';
import { GrafoBloccoComponent } from './grafo-blocco/grafo-blocco.component';
import { GrafoInsicurezzaComponent } from './grafo-insicurezza/grafo-insicurezza.component';

const routes: Routes = [
  { path: 'grafico', component: GrafoComponent },
  { path: 'graficoBlocco', component: GrafoBloccoComponent },
  { path: 'graficoInsicurezza', component: GrafoInsicurezzaComponent },
  { path: 'home', component: HomeComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
