import { Component, OnInit } from '@angular/core';
import { TerminServiceService } from '../termin-service.service';
import { Termin } from '../model/termin';

@Component({
  selector: 'app-termin-share-view',
  templateUrl: './termin-share-view.component.html',
  styleUrls: ['./termin-share-view.component.css']
})
export class TerminShareViewComponent implements OnInit {

  constructor(private terminService: TerminServiceService) { }

  private termin: Termin;
  private terminId: String;

  ngOnInit() {
    // inject terminId hier
    this.terminService.getTerminForId(this.terminId).subscribe((result) => {
      this.termin = result;
    })
  }


  getShareUrl() {
    // return share url from backend in the form
    // url/share-termin/{id}
    // am besten url/share-termin/{id} als url für diese page
  }


  downloadIcs() {
    //TODO: return ics file from backend
  }

}
