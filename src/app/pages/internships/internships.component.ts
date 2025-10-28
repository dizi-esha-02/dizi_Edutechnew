import { Component, OnInit } from '@angular/core';
import { DataService, Internship } from '../../services/data.service';

@Component({
  selector: 'app-internships',
  templateUrl: './internships.component.html',
  styleUrl: './internships.component.css',
})
export class InternshipsComponent implements OnInit {
  // --- STATE ---
  // Holds the full, original list from the service
  allInternships: Internship[] = [];
  
  // Holds the list we actually show on the page
  filteredInternships: Internship[] = [];

  // Tracks the active button (e.g., 'All', 'Remote', '3 Months')
  activeFilter: string = 'All'; // Default filter
  
  // Tracks the text in the search bar
  searchTerm: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    // 1. Get all internships and store them
    this.allInternships = this.dataService.getInternships();
    
    // 2. Apply the default filters
    this.applyFilters();
  }

  // --- FILTERING LOGIC ---

  // Called by the filter buttons
  selectFilter(filter: string): void {
    this.activeFilter = filter;
    this.applyFilters();
  }

  // Called by the search bar on every key press
  onSearch(event: Event): void {
    // Get the value from the input event
    this.searchTerm = (event.target as HTMLInputElement).value;
    this.applyFilters();
  }

  // This is the new, combined filtering function
  applyFilters(): void {
    // 1. Start with the full list
    let tempInternships = this.allInternships;

    // 2. Apply the SEARCH filter first
    if (this.searchTerm) {
      const lowerCaseSearch = this.searchTerm.toLowerCase();
      tempInternships = tempInternships.filter(
        (internship) =>
          internship.title.toLowerCase().includes(lowerCaseSearch) ||
          internship.company.toLowerCase().includes(lowerCaseSearch) ||
          internship.location.toLowerCase().includes(lowerCaseSearch)
      );
    }

    // 3. Apply the BUTTON filter
    if (this.activeFilter === 'All') {
      // No button filter needed
    } else if (
      this.activeFilter === 'Remote' ||
      this.activeFilter === 'On-Site' ||
      this.activeFilter === 'Hybrid'
    ) {
      // Filter by type
      tempInternships = tempInternships.filter(
        (internship) => internship.type === this.activeFilter
      );
    } else if (
      this.activeFilter === '3 Months' ||
      this.activeFilter === '6 Months'
    ) {
      // Filter by duration
      tempInternships = tempInternships.filter(
        (internship) => internship.duration === this.activeFilter
      );
    }

    // 4. Set the final list to be displayed
    this.filteredInternships = tempInternships;
  }
}

