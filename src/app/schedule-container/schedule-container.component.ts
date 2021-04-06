import {Component, Input, OnInit} from '@angular/core';
import {Event} from '../scheduler/scheduler.component';
import {SchedulerService} from '../scheduler.service';

@Component({
  selector: 'app-schedule-container',
  templateUrl: './schedule-container.component.html',
  styleUrls: ['./schedule-container.component.scss']
})
export class ScheduleContainerComponent implements OnInit {
  events: Event[] = [];

  onNewEvent(event: Event) {
    this.events = this.events.concat(event);
    localStorage.setItem('events', JSON.stringify(this.events));
  }

  constructor(public schedulerService: SchedulerService) { }

  ngOnInit(): void {
    this.schedulerService.users = JSON.parse(localStorage.getItem('users')) ? JSON.parse(localStorage.getItem('users')) : [];
    // this.events = JSON.parse(localStorage.getItem('events')) ? JSON.parse(localStorage.getItem('events')) : [];
    // console.log('this.events@@@@@', this.events);
  }

}
