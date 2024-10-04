import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-teacher-day',
  standalone: true,
  imports: [ FormsModule, CommonModule ],
  templateUrl: './teacher-day.component.html',
  styleUrl: './teacher-day.component.css'
})
export class TeacherDayComponent {

headline: string = 'يـوم معلـم سـعيـد';
teacherName: string = '';
teacherMessage: string = '';
isSubmitted: boolean = false;

submitTeacherName() {
  if (this.teacherName.trim() !== '') {
    this.teacherMessage = `🥳يوم معلـم سعيد , معـلم ${this.teacherName}`;
    this.isSubmitted = true;
  }
}

}
