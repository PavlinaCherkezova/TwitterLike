import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthenticationService } from './services/authentication.service';
import { TweetSubmitService } from './services/tweet-submit.service';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './views/home/home.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HomeModule,
    FontAwesomeModule,
  ],
  providers: [TweetSubmitService, AuthenticationService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
