import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';   // Needed for ngModel!

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { Logger } from './services/logger.service';


@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [Logger],
  bootstrap: [AppComponent]
})
export class AppModule { }
