import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mflix-visualizer';
  results : Object[];
  obs : Observable<object>;
  constructor(private http : HttpClient){}

  loadData()
  {
    this.obs = this.http.get("https://3000-b5aa089e-96d0-4c27-bc4b-edf203b5c3af.ws-eu03.gitpod.io/blocco/Denutrizione/Aruba");
    this.obs.subscribe(this.getData);
  }

  getData = (data) => {
    this.results = data;
  }
}
