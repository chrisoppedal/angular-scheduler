import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateWarningDialogComponent } from './date-warning-dialog.component';

describe('DateWarningDialogComponent', () => {
  let component: DateWarningDialogComponent;
  let fixture: ComponentFixture<DateWarningDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateWarningDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateWarningDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
