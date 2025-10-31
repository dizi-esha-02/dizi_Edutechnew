import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// --- Pages ---
import { HomeComponent } from './pages/home/home.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { ProfilesComponent } from './pages/profiles/profiles.component';
import { InternshipsComponent } from './pages/internships/internships.component'; // Verify path
import { HackathonsComponent } from './pages/hackathons/hackathons.component'; // Verify path
import { LandingpageComponent } from './pages/landingpage/landingpage.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'profiles', component: ProfilesComponent },
  { path: 'internships', component: InternshipsComponent },
  { path: 'hackathons', component: HackathonsComponent },
  {path:'landingpage', component: LandingpageComponent}, // === ADDED LANDINGPAGE ROUTE ===
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule], // Ensure RouterModule is exported
})
export class AppRoutingModule {}