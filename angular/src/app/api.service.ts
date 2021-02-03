import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  baseUrl = 'https://3000-f29b5eed-8bb1-4649-92ac-4d2cbb241d9d.ws-eu03.gitpod.io/blocco/Denutrizione/';

  getDenutrizione(name: string) {
    const url = `${this.baseUrl}${name}`;
    let obsTracks = this.http.get(url);
    console.log(obsTracks);
    return obsTracks;
  }

}

