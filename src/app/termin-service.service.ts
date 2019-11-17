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
    return this.http.get<Array<Termin>>(this.HOST + "/all");
  }

  getTerminForId(id: String) {
    return this.http.get<Termin>(this.HOST + "/id/"+id);
  }

  postTermin(terminDTO: Termin) {
    return this.http.post<Array<String>>(this.HOST + "/add",terminDTO);
  }

  getIcs(terminId: String) {
    return this.http.get<Blob>(this.HOST + "/getIcs/" + terminId,
    {responseType: 'blob' as 'json'});
  }
}
