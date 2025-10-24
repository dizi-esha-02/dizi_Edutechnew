import { Component, Input } from '@angular/core';
// --- FIXED PATH ---
import { Profile } from '../../services/data.service';
import { CommonModule } from '@angular/common'; // We need this for @if

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.css',
})
export class ProfileCardComponent {
  @Input({ required: true }) profile!: Profile;
}
