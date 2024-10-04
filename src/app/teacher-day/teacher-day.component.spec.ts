import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherDayComponent } from './teacher-day.component';

describe('TeacherDayComponent', () => {
  let component: TeacherDayComponent;
  let fixture: ComponentFixture<TeacherDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherDayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
