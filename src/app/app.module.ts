import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDialogModule} from '@angular/material/dialog';
import { NewUserComponent } from './new-user/new-user.component';
import { FormsModule} from '@angular/forms';
import { SchedulerModule } from '@progress/kendo-angular-scheduler';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { ScheduleContainerComponent } from './schedule-container/schedule-container.component';
import { EventFormComponent } from './event-form/event-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import { MatSelectModule} from '@angular/material/select';
import { MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    NewUserComponent,
    SchedulerComponent,
    ScheduleContainerComponent,
    EventFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDialogModule,
    FormsModule,
    SchedulerModule,
    DateInputsModule,
    TreeViewModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
