import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-grafo-insicurezza',
  templateUrl: './grafo-insicurezza.component.html',
  styleUrls: ['./grafo-insicurezza.component.css']
})
export class GrafoInsicurezzaComponent {
  query: string;
  apiServiceObs: Observable<Object>;
  results: any;
  selectedOption: string = '2001';
  chartType: string = 'PieChart';
  chartData =  [];
  height: string = '700';
  width: string = '1000';
  i: number=1;
  y: number;

  options = {
      is3D: true
    };

  options1 = [
      { name: "2001", value: "2001" },
      { name: "2002", value: "2002" },
      { name: "2003", value: "2003" },
      { name: "2004", value: "2004" },
      { name: "2005", value: "2005" },
      { name: "2006", value: "2006" },
      { name: "2007", value: "2007" },
      { name: "2008", value: "2008" },
      { name: "2009", value: "2009" },
      { name: "2010", value: "2010" },
      { name: "2011", value: "2011" },
      { name: "2012", value: "2012" },
      { name: "2013", value: "2013" },
      { name: "2014", value: "2014" },
      { name: "2015", value: "2015" },
      { name: "2016", value: "2016" },
      { name: "2017", value: "2017" },
      { name: "2018", value: "2018" },
      { name: "2019", value: "2019" },
    ]

  constructor(
    public api: ApiService,
    private route: ActivatedRoute,
    private service: ApiService) {
  }

  submit(): void {
    this.chartData = [];
    this.apiServiceObs = this.api.getInsicurezza();
    this.apiServiceObs.subscribe((data) => {
      this.results = data;
      console.log(this.results);

      for (let i =  0; i < this.results.length; i++) {

        if (this.selectedOption == this.results[i].Year) {
          this.y = parseFloat((this.results[i].Value).replace('<', ''));
          this.chartData.push([this.results[i].Area, this.y]);
        }

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

