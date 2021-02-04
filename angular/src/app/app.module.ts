import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GoogleChartsModule } from 'angular-google-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GrafoComponent } from './grafo/grafo.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { GrafoBloccoComponent } from './grafo-blocco/grafo-blocco.component';
import { GrafoInsicurezzaComponent } from './grafo-insicurezza/grafo-insicurezza.component';

@NgModule({
  declarations: [
    AppComponent,
    GrafoComponent,
    HomeComponent,
    GrafoBloccoComponent,
    GrafoInsicurezzaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GoogleChartsModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
