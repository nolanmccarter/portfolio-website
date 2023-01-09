import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { aboutComponent } from 'src/app/about';
import { contactComponent } from 'src/app/contact';
import { educationComponent } from 'src/app/education';
import { homeComponent } from 'src/app/home';
import { workComponent } from 'src/app/work';

const routes: Routes = [
  { path: '', component: homeComponent },
  { path: 'about', component: aboutComponent },
  { path: 'work', component: workComponent },
  { path: 'education', component: educationComponent },
  { path: 'contact', component: contactComponent },

  // otherwise redirect to home
  {path: '**', redirectTo: '' }
];
export const AppRoutingModule = RouterModule.forRoot(routes);
