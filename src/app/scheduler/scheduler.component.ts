import {Component, Input, OnInit} from '@angular/core';
import {SchedulerService} from '../scheduler.service';

export interface Event {
  title: string;
  start: Date;
  end: Date;
}

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.scss']
})
export class SchedulerComponent implements OnInit {
  @Input() events: Event[];
  allEvents: Event[] = [];
  startTime = '7:00';
  selectedDate = new Date();

  constructor(public schedulerService: SchedulerService) { }

  onEmployeeChanged = function(event) {
    if (!this.allEvents.length) {
      this.allEvents = this.events;
    }
    this.events = this.allEvents.filter(e => e.title.includes(event.source.value));
  };

  ngOnInit(): void { }
}
