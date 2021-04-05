import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {NewUserComponent} from './new-user/new-user.component';
import {AboutComponent} from './about/about.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public dialog: MatDialog) {}
  title = 'angular-scheduler';

  openUsersDialog = () => {
    const dialogRef = this.dialog.open(NewUserComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openAboutDialog = () => {
    const dialogRef = this.dialog.open(AboutComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
