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
import { HomeLinkComponent } from './home-link/home-link.component';
import { DialogInstructionsComponent } from './dialog-instructions/dialog-instructions.component';
import { BananaSnackComponent } from './banana-snack/banana-snack.component';
import { BananaDialogComponent } from './banana-dialog/banana-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    MeowComponent,
    QuackComponent,
    MooComponent,
    BananaComponent,
    HomeComponent,
    HomeLinkComponent,
    DialogInstructionsComponent,
    BananaSnackComponent,
    BananaDialogComponent
  ],
  entryComponents: [
    DialogInstructionsComponent,
    BananaSnackComponent
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
