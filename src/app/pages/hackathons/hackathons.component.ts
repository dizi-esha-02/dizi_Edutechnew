import { Component, OnInit } from '@angular/core';
import { DataService, Hackathon } from '../../services/data.service';

@Component({
  selector: 'app-hackathons',
  templateUrl: './hackathons.component.html',
  styleUrl: './hackathons.component.css',
})
export class HackathonsComponent implements OnInit {
  // --- STATE ---
  // Holds the full, original list
  allHackathons: Hackathon[] = [];
  
  // Holds the list we actually show on the page
  filteredHackathons: Hackathon[] = [];

  // Tracks the active button (e.g., 'All', 'Online')
  activeFilter: string = 'All'; // Default filter
  
  // Tracks the text in the search bar
  searchTerm: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    // 1. Get all hackathons and store them
    this.allHackathons = this.dataService.getHackathons();
    
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
    let tempHackathons = this.allHackathons;

    // 2. Apply the SEARCH filter first
    if (this.searchTerm) {
      const lowerCaseSearch = this.searchTerm.toLowerCase();
      tempHackathons = tempHackathons.filter(
        (hackathon) =>
          hackathon.title.toLowerCase().includes(lowerCaseSearch) ||
          hackathon.organizer.toLowerCase().includes(lowerCaseSearch)
      );
    }

    // 3. Apply the BUTTON filter
    if (this.activeFilter === 'All') {
      // No button filter needed
    } else if (
      this.activeFilter === 'Online' ||
      this.activeFilter === 'Offline'
    ) {
      // Filter by mode
      tempHackathons = tempHackathons.filter(
        (hackathon) => hackathon.mode === this.activeFilter
      );
    }
    // We can add more filters here later (e.g., Prize Pool)

    // 4. Set the final list to be displayed
    this.filteredHackathons = tempHackathons;
  }
}

