import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; // <-- Import this for @if

import { AppRoutingModule } from './app-routing.module'; // <-- Import your new routing module
import { AppComponent } from './app.component';

// Import ALL your components
import { HomeComponent } from './pages/home/home.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { ProfilesComponent } from './pages/profiles/profiles.component';
import { CourseCardComponent } from './components/course-card/course-card.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { PaginationComponent } from './components/pagination/pagination.component';

@NgModule({
  declarations: [
    // Add ALL components here
    AppComponent,
    HomeComponent,
    CoursesComponent,
    ProfilesComponent,
    CourseCardComponent,
    ProfileCardComponent,
    PaginationComponent,
  ],
  imports: [
    // Add all Modules here
    BrowserModule,
    AppRoutingModule, // <-- Add your routing module
    CommonModule, // <-- Add CommonModule so @if/@for work
  ],
  providers: [
    // Your DataService is 'providedIn: root', so it's already available.
    // No providers needed here.
  ],
  bootstrap: [AppComponent], // <-- Tell Angular to start with AppComponent
})
export class AppModule {}
