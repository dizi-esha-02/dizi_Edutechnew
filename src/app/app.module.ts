import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // <-- IMPORT RouterModule

import { AppRoutingModule } from './app-routing.module'; // Make sure this path is correct
import { AppComponent } from './app.component';

// --- Pages ---
// Double-check these paths match your actual folder structure
import { HomeComponent } from './pages/home/home.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { ProfilesComponent } from './pages/profiles/profiles.component';
import { InternshipsComponent } from './pages/internships/internships.component';
import { HackathonsComponent } from './pages/hackathons/hackathons.component';
import { LandingpageComponent } from './pages/landingpage/landingpage.component'; // Import LandingpageComponent

// --- Components ---
// Double-check these paths match your actual folder structure
import { CourseCardComponent } from './components/course-card/course-card.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { InternshipCardComponent } from './components/internship-card/internship-card.component';
import { HackathonCardComponent } from './components/hackathon-card/hackathon-card.component';
import { PaginationComponent } from './components/pagination/pagination.component'; // Import Pagination

@NgModule({
  declarations: [
    AppComponent,
    // --- Pages ---
    HomeComponent,
    CoursesComponent,
    ProfilesComponent,
    InternshipsComponent, // Ensure it's declared
    HackathonsComponent, // Ensure it's declared
    LandingpageComponent, // Declare LandingpageComponent
    // --- Components ---
    CourseCardComponent, // Ensure it's declared
    ProfileCardComponent, // Ensure it's declared
    InternshipCardComponent, // Ensure it's declared
    HackathonCardComponent, // Ensure it's declared
    PaginationComponent, // <-- ADD PaginationComponent HERE
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // This imports RouterModule configured with routes
    CommonModule,
    RouterModule, // <-- ADD RouterModule HERE
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

