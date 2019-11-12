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

  postTermin(terminString: String) {
    var termin = new Termin(terminString, "", new Date(), new Date());
    return this.http.post(this.HOST + "/add",termin);
  }
}
