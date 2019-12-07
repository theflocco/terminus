import { Component, OnInit } from '@angular/core';
import { TerminServiceService } from '../termin-service.service';
import { NgbDate, NgbCalendar, NgbTimepicker, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { Termin } from '../model/termin';
import { DateDTO } from '../model/dateDTO';
import { Router } from '@angular/router';

@Component({
  selector: 'app-termin-add',
  templateUrl: './termin-add.component.html',
  styleUrls: ['./termin-add.component.css']
})
export class TerminAddComponent implements OnInit {

  private data = [];
  titleString: string;
  descriptionString: string;
  startTime = {hour: 13, minute: 30, second: 0};
  endTime={hour: 13, minute: 30, second: 0};

  fromDate: NgbDate
  toDate: NgbDate
  hoveredDate: NgbDate

  private dateModel: NgbDate;


  constructor(calendar: NgbCalendar,
    private terminService: TerminServiceService,
    private router: Router) {

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

  onStartTimeSelection(time: NgbTimeStruct) {
    this.startTime = time;
  }

  onEndTimeSelection(time: NgbTimeStruct) {
    this.endTime = time;
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



  fetchData() {
    this.terminService.getAllTermine().subscribe((result: Array<Termin>) => {
      console.log(result);
      this.data = result;
    });
  }

  postTermin() {
    let fromDateDTO = new DateDTO(this.fromDate.day, this.fromDate.month, this.fromDate.year, this.startTime.hour, this.startTime.minute);
    let toDateDTO = new DateDTO(this.toDate.day, this.toDate.month, this.toDate.year, this.endTime.hour, this.endTime.minute);
    let terminDTO = new Termin(this.titleString, this.descriptionString, fromDateDTO, toDateDTO);
    this.terminService.postTermin(terminDTO).subscribe((result: [String]) => {
      console.log("post successful");
      console.log("id: " + result);
      // weiterleiten auf /share-termin/{id}

      this.router.navigate(["/share-termin", result[0]]);
    })
  }
}
