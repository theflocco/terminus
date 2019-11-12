import { Component, OnInit } from '@angular/core';
import { TerminServiceService } from '../termin-service.service';

@Component({
  selector: 'app-termin-add',
  templateUrl: './termin-add.component.html',
  styleUrls: ['./termin-add.component.css']
})
export class TerminAddComponent implements OnInit {


  constructor(private terminService: TerminServiceService) { }

  private data = [];
  private titleString: string;


  ngOnInit() {
    this.fetchData();
  }




  private fetchData() {
    this.terminService.getAllTermine().subscribe((result: any[]) => {
      console.log(result);
      this.data = result;
    });
  }

  postData() {
    this.terminService.postTermin(this.titleString).subscribe((result) => {
      console.log(result);
    })
  }
}
