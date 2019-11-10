import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
}
