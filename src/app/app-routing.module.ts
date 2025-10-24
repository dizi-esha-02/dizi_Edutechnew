import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import your page components
import { HomeComponent } from './pages/home/home.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { ProfilesComponent } from './pages/profiles/profiles.component';

// Define your routes (this was previously in app.routes.ts)
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'profiles', component: ProfilesComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
