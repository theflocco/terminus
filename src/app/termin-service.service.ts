import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Termin } from './model/termin';

@Injectable({
  providedIn: 'root'
})
export class TerminServiceService {

  private HOST = "http://localhost:8080";

  constructor(private http: HttpClient) { 

  }
  
  getAllTermine() {
    return this.http.get(this.HOST + "/all");
  }

  postTermin(terminDTO: Termin) {
    return this.http.post(this.HOST + "/add",terminDTO);
  }
}
