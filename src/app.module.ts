import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { mainComponent } from './app.mainComponent';
import { homeComponent } from './app/home';
import { aboutComponent } from './app/about';
import { contactComponent } from './app/contact';
import { educationComponent } from './app/education';
import { workComponent } from './app/work';


@NgModule({
  declarations: [
    mainComponent,
    aboutComponent,
    contactComponent,
    educationComponent,
    homeComponent,
    workComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [mainComponent]
})
export class AppModule { }
