import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GrafoComponent } from './grafo/grafo.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'grafico', component: GrafoComponent },
  { path: 'home', component: HomeComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
