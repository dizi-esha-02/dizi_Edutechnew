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
      @Input() totalItems: number = 0;
      @Input() itemsPerPage: number = 6; // Default to 6 per page
      @Input() currentPage: number = 1;
      @Output() pageChange = new EventEmitter<number>();

      // --- COMPONENT-ONLY STATE ---
      totalPages: number = 0;
      pages: number[] = [];

      ngOnChanges(changes: SimpleChanges): void {
        this.updatePagination();
      }

      updatePagination(): void {
        this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
        this.pages = Array.from(Array(this.totalPages).keys()).map((i) => i + 1);
      }

      selectPage(page: number): void {
        if (page >= 1 && page <= this.totalPages && page !== this.currentPage) {
          this.currentPage = page;
          this.pageChange.emit(this.currentPage);
        }
      }
    }
    

