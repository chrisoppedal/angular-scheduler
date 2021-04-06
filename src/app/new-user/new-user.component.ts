import { Component, OnInit } from '@angular/core';
import {SchedulerService} from '../scheduler.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  constructor(private schedulerService: SchedulerService, public router: Router) { }

  onClickSubmit = (form) => {
   console.log(form);
   this.schedulerService.addUser(form);
   console.log('users', this.schedulerService.users);
   this.router.navigate(['/scheduler']);
  };

  ngOnInit(): void {
  }
}
