import { Component, Input } from '@angular/core';
// 1. Import the Hackathon data structure
import { Hackathon } from '../../services/data.service';

@Component({
  selector: 'app-hackathon-card',
  templateUrl: './hackathon-card.component.html',
  styleUrl: './hackathon-card.component.css',
})
export class HackathonCardComponent {
  // 2. Receive the 'hackathon' data from the parent page
  @Input() hackathon!: Hackathon;
}
