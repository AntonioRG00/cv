import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './navigation_pages/contact/contact.component';
import { CoursesComponent } from './navigation_pages/courses/courses.component';
import { HomeComponent } from './navigation_pages/home/home.component';
import { ExperienceComponent } from './navigation_pages/experience/experience.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent, data: { animation: 'none' }
  },
  {
    path: 'experience',
    component: ExperienceComponent, data: { animation: 'slideToTheRight' }
  },
  {
    path: 'courses',
    component: CoursesComponent, data: { animation: 'slideToTheBottom' }
  },
  {
    path: 'contact',
    component: ContactComponent, data: { animation: 'slideToTheLeft' }
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
