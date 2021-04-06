import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {SchedulerService} from '../scheduler.service';
import {NewUserComponent} from '../new-user/new-user.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss'],
})

export class EventFormComponent implements OnInit {
  constructor(public schedulerService: SchedulerService, public dialog: MatDialog) {}

  eventForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    start: new FormControl(),
    end: new FormControl(),
  });

  @Output()
  newEvent: EventEmitter<Event> = new EventEmitter();

  handleSubmit() {
    const event = this.eventForm.value;
    console.log('this.eventForm', this.eventForm.value);
    console.log(event);
    this.newEvent.emit({
      ...event,
    });
    this.eventForm.reset();
  }

  openUsersDialog = () => {
    const dialogRef = this.dialog.open(NewUserComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit() {}
}
