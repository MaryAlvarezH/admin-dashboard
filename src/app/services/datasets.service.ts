import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatasetsService {

  endpoint = 'http://localhost:3000/'

  constructor(private http: HttpClient) { }

  getInvestment() {
    return this.http.get(`${this.endpoint}investment`);
  }
}
