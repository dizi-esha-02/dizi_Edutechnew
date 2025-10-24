import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css',
})
export class PaginationComponent implements OnChanges {
  // --- INPUTS & OUTPUTS ---

  // The total number of items in the full list
  @Input() totalItems: number = 0;
  // How many items to show on each page
  @Input() itemsPerPage: number = 6;
  // The currently active page, defaults to 1
  @Input() currentPage: number = 1;

  // This "emits" an event to the parent component when a page is clicked
  @Output() pageChange = new EventEmitter<number>();

  // --- COMPONENT-ONLY STATE ---
  totalPages: number = 0;
  pages: number[] = [];

  // This runs when any @Input() changes (e.g., when data loads)
  ngOnChanges(changes: SimpleChanges): void {
    this.updatePagination();
  }

  updatePagination(): void {
    // 1. Calculate total pages
    this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);

    // 2. Create the array of page numbers (e.g., [1, 2, 3])
    // We use 'Array(this.totalPages).keys()' to create an array from 0 to n-1
    // We add 1 to each number to make it 1-based (1 to n)
    this.pages = Array.from(Array(this.totalPages).keys()).map((i) => i + 1);
  }

  // This is called from the HTML when a page number is clicked
  selectPage(page: number): void {
    if (page >= 1 && page <= this.totalPages && page !== this.currentPage) {
      this.currentPage = page;
      // Emit the new page number to the parent component
      this.pageChange.emit(this.currentPage);
    }
  }
}