import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TeacherDayComponent } from "./teacher-day/teacher-day.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TeacherDayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HappyTeacherDayProj';
}
