import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-grafo',
  templateUrl: './grafo.component.html',
  styleUrls: ['./grafo.component.css']
})

export class GrafoComponent {
  query: string;
  apiServiceObs: Observable<Object>;
  results: any;
  selectedOption: string = 'EX';
  chartType: string = 'LineChart';
  chartData =  [];
  height: string;
  width: string;
  i: number=1;
  y: number;

  options1 = [
      { name: "India", value: "India" },
      { name: "Brazil", value: "Brazil" },
      { name: "Albania", value: "Albania" }
    ]

  constructor(
    public api: ApiService,
    private route: ActivatedRoute,
    private service: ApiService) {
  }

  submit(): void {
    this.chartData = [];
    this.apiServiceObs = this.api.getDenutrizione(this.selectedOption);
    this.apiServiceObs.subscribe((data) => {
      this.results = data; console.log(this.results);
      for (let i=1; i<19; i++) {
        console.log(this.results['0']['2001']);
        this.y=parseFloat(this.results['0'][`${i+2000}`]);
        this.chartData.push([i+2000, this.y]);
        }
        console.log(this.chartData)
    });
  }

  renderResults(res: any): void {
    this.results = null;
    if (res && res.products && res.products) {
      this.results = res.products;
    }
  }
}
