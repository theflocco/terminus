import { Component, OnInit } from '@angular/core';
import { TerminServiceService } from '../termin-service.service';
import { Termin } from '../model/termin';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscribable, Subscription } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-termin-share-view',
  templateUrl: './termin-share-view.component.html',
  styleUrls: ['./termin-share-view.component.css']
})
export class TerminShareViewComponent implements OnInit {

  constructor(private terminService: TerminServiceService,
    private route: ActivatedRoute,
    private router: Router,
    private sanitizer: DomSanitizer) { }

  private termin: Termin;
  private routeSub: Subscription;
  private terminId: String;


  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      console.log(params);
      this.terminId = params["id"];
    })
    // inject terminId hier
    this.terminService.getTerminForId(this.terminId).subscribe((result) => {
      this.termin = result;
      console.log(this.termin);
    });
    this.terminService.getIcs(this.terminId).subscribe((result: any) => {
      console.log("got result from backend:" + result.body);
    });

  }


  copyMessage(){
    let val = 'terminus-frontend.herokuapp.com' + this.router.url;
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }


  downloadIcs() {
    this.terminService.getIcs(this.terminId).subscribe(result => {
      const blob = new Blob([result], { type: 'text/calendar' });
      const data = window.URL.createObjectURL(blob);
      var link = document.createElement('a');
      link.href = data;
      link.download = "termin.ics";
      link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));

      setTimeout(function () {
        // For Firefox it is necessary to delay revoking the ObjectURL
        window.URL.revokeObjectURL(data);
        link.remove();
    }, 100);

    });
  }

}
