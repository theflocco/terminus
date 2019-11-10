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


  ngOnInit() {
    this.terminService.getAllTermine().subscribe((result: any[]) => {
      console.log(result);
      this.data = result;
    })
  }



}
