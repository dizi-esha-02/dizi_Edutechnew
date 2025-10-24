import { Component, OnInit } from '@angular/core';
// Import the Profile interface from our service
import { DataService, Profile } from '../../services/data.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrl: './profiles.component.css',
})
export class ProfilesComponent implements OnInit {
  // --- New Pagination State ---

  // This will hold ALL 12 profiles
  allProfiles: Profile[] = [];

  // This will only hold the 6 profiles for the CURRENT page
  displayedProfiles: Profile[] = [];

  // This will hold the total count (12)
  totalItems: number = 0;

  // Page size is 6
  itemsPerPage: number = 6;

  // Start on page 1
  currentPage: number = 1;

  // --- End New Pagination State ---

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    // 1. Get ALL profiles from the service
    this.allProfiles = this.dataService.getProfiles();

    // 2. Set the total count
    this.totalItems = this.allProfiles.length;

    // 3. Update the displayedProfiles to show the first page
    this.updateDisplayedProfiles();
  }

  // This is the function that slices the array
  updateDisplayedProfiles(): void {
    // Calculate the start and end index
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = this.currentPage * this.itemsPerPage;

    // Slice the full 'allProfiles' list
    this.displayedProfiles = this.allProfiles.slice(startIndex, endIndex);
  }

  // This function is called BY THE PAGINATION COMPONENT
  onPageChange(newPage: number): void {
    // 1. Update the current page
    this.currentPage = newPage;

    // 2. Re-run the slice logic
    this.updateDisplayedProfiles();
  }
}