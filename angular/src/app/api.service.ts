import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  baseUrl = 'https://3000-e06f7788-e642-495d-9008-eb07bfe6bbb8.ws-eu03.gitpod.io/denutrizione/';
  baseUrl1 = 'https://3000-e06f7788-e642-495d-9008-eb07bfe6bbb8.ws-eu03.gitpod.io/blocco/';

  getDenutrizione(name: string) {
    const url = `${this.baseUrl}${name}`;
    let obsTracks = this.http.get(url);
    console.log(obsTracks);
    return obsTracks;
  }

  getBlocco(name: string) {
    const url = `${this.baseUrl1}${name}`;
    let obsTracks = this.http.get(url);
    console.log(obsTracks);
    return obsTracks;
  }
  getInsicurezza() {
    const url = `https://3000-e06f7788-e642-495d-9008-eb07bfe6bbb8.ws-eu03.gitpod.io/insicurezza`;
    let obsTracks = this.http.get(url);
    console.log(obsTracks);
    return obsTracks;
  }
}

