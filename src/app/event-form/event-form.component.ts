import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SchedulerService} from '../scheduler.service';
import {NewUserComponent} from '../new-user/new-user.component';
import {MatDialog} from '@angular/material/dialog';
import {DateWarningDialogComponent} from '../date-warning-dialog/date-warning-dialog.component';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss'],
})

export class EventFormComponent implements OnInit {
  constructor(public schedulerService: SchedulerService, public dialog: MatDialog) {}

  eventForm: FormGroup = new FormGroup({
    title: new FormControl(),
    start: new FormControl(),
    end: new FormControl(),
  });

  @Output()
  newEvent: EventEmitter<Event> = new EventEmitter();

  handleSubmit() {
    const event = this.eventForm.value;
    if (this.eventForm.value.start < this.eventForm.value.end) {
      this.newEvent.emit({
        ...event,
      });
      this.eventForm.reset();
      this.eventForm.markAsPristine();
    } else {
      this.dialog.open(DateWarningDialogComponent);
    }
  }

  openUsersDialog = () => {
    const dialogRef = this.dialog.open(NewUserComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit() {}
}
