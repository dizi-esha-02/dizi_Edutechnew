import { Component, OnInit } from '@angular/core';
// Import the Course interface from our service
import { DataService, Course } from '../../services/data.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css',
})
export class CoursesComponent implements OnInit {
  // --- New Pagination State ---
  
  // This will hold ALL 12 courses from the service
  allCourses: Course[] = [];

  // This will only hold the 6 courses for the CURRENT page
  displayedCourses: Course[] = [];

  // This will hold the total count (12) to send to the pagination component
  totalItems: number = 0;

  // We set our page size to 6, as you requested
  itemsPerPage: number = 6;

  // The app always starts on page 1
  currentPage: number = 1;
  
  // --- End New Pagination State ---

  // Inject the DataService
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    // 1. Get ALL courses from the service and store them
    this.allCourses = this.dataService.getCourses();

    // 2. Set the total count
    this.totalItems = this.allCourses.length;

    // 3. Update the displayedCourses to show the first page
    this.updateDisplayedCourses();
  }

  // This is the function that slices the array
  updateDisplayedCourses(): void {
    // Calculate the start and end index for the .slice() method
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = this.currentPage * this.itemsPerPage;

    // Slice the full 'allCourses' list to get just the 6 items we want
    this.displayedCourses = this.allCourses.slice(startIndex, endIndex);
  }

  // This function is called BY THE PAGINATION COMPONENT
  // when the user clicks a new page
  onPageChange(newPage: number): void {
    // 1. Update the current page
    this.currentPage = newPage;
    
    // 2. Re-run the slice logic to get the new page's items
    this.updateDisplayedCourses();
  }
}