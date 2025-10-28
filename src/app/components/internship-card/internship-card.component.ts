import { Component, Input } from '@angular/core';
// Import our data structure from the service
import { Internship } from '../../services/data.service';

@Component({
  selector: 'app-internship-card',
  templateUrl: './internship-card.component.html',
  styleUrl: './internship-card.component.css',
})
export class InternshipCardComponent {
  // This @Input() decorator allows the parent page
  // to pass the internship data into this component.
  @Input() internship!: Internship;
}
