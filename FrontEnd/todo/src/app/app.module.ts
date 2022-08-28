import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { WelcometestComponent } from './welcometest/welcometest.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    WelcometestComponent,
    LoginComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
