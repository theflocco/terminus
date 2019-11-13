import { Component, OnInit } from '@angular/core';
import { TerminServiceService } from '../termin-service.service';
import { NgbDate, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { Termin } from '../model/termin';
import { DateDTO } from '../model/dateDTO';

@Component({
  selector: 'app-termin-add',
  templateUrl: './termin-add.component.html',
  styleUrls: ['./termin-add.component.css']
})
export class TerminAddComponent implements OnInit {

  private data = [];
  private titleString: string;
  private descriptionString: string;

  private fromDate: NgbDate
  private toDate: NgbDate
  private hoveredDate: NgbDate

  private dateModel: NgbDate;


  constructor(calendar: NgbCalendar,
    private terminService: TerminServiceService) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
  }





  ngOnInit() {
    this.fetchData();
  }

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || date.equals(this.toDate) || this.isInside(date) || this.isHovered(date);
  }



  private fetchData() {
    this.terminService.getAllTermine().subscribe((result: any[]) => {
      console.log(result);
      this.data = result;
    });
  }

  postData() {
    let fromDateDTO = new DateDTO(this.fromDate.day, this.fromDate.month, this.fromDate.year);


    let toDateDTO = new DateDTO(this.toDate.day, this.toDate.month, this.toDate.year);


    let terminDTO = new Termin(this.titleString, this.descriptionString, fromDateDTO, toDateDTO);
    this.terminService.postTermin(terminDTO).subscribe((result) => {
      console.log(result);
    })
  }
}
