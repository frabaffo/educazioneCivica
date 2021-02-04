import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-grafo-blocco',
  templateUrl: './grafo-blocco.component.html',
  styleUrls: ['./grafo-blocco.component.css']
})

export class GrafoBloccoComponent {
  query: string;
  apiServiceObs: Observable<Object>;
  results: any;
  selectedOption: string = 'India';
  chartType: string = 'BarChart';
  chartData =  [];
  height: string = '700';
  width: string = '1000';
  i: number=1;
  y: number;

  options1 = [
      { name: "India", value: "India" },
      { name: "Brazil", value: "Brazil" },
      { name: "Albania", value: "Albania" },
      { name: "Chile", value: "chile" },
      { name: "Kuwait", value: "kuwait" },
      { name: "Peru", value: "peru" },
      { name: "Jamaica", value: "jamaica" },
      { name: "Bangladesh", value: "bangladesh" }
    ];

  constructor(
    public api: ApiService,
    private route: ActivatedRoute,
    private service: ApiService) {
  }

  submit(): void {
    this.chartData = [];
    this.apiServiceObs = this.api.getBlocco(this.selectedOption);
    this.apiServiceObs.subscribe((data) => {
      this.results = data; console.log(this.results);
      for (let i=1; i<19; i++) {
        console.log(this.results['0']['2001']);
        this.y=parseFloat(this.results['0'][`${i+2000}`]);
        this.chartData.push([`${i+2000}`, this.y]);
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
