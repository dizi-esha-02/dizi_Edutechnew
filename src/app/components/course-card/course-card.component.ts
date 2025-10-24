import { Component, Input } from '@angular/core';
import { Course } from '../../services/data.service'; 

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css',
})
export class CourseCardComponent {
  // This @Input() allows the parent (courses.component) to pass data in
  @Input({ required: true }) course!: Course;
}
