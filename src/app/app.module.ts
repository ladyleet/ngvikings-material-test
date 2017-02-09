import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { MeowComponent } from './meow/meow.component';
import { QuackComponent } from './quack/quack.component';
import { MooComponent } from './moo/moo.component';
import { BananaComponent } from './banana/banana.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MeowComponent,
    QuackComponent,
    MooComponent,
    BananaComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
