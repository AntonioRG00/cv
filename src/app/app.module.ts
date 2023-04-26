import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './navigation_pages/home/home.component';
import { ContactComponent } from './navigation_pages/contact/contact.component';
import { CoursesComponent } from './navigation_pages/courses/courses.component';
import { ExperienceComponent } from './navigation_pages/experience/experience.component';
import { TextWriterComponent } from './navigation_pages/home/text-writer/text-writer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ContactComponent,
    CoursesComponent,
    ExperienceComponent,
    TextWriterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
