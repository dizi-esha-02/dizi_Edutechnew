import { Component, OnInit } from '@angular/core';
// Import interfaces from the merged DataService
import { DataService, Course } from '../../services/data.service'; // Verify path

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  // Array to hold the first few courses for the featured section
  featuredCourses: Course[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    // Get all courses, then take the first 3 (or fewer if less than 3 exist)
    const allCourses = this.dataService.getCourses();
    this.featuredCourses = allCourses.slice(0, 3);
  }
}

