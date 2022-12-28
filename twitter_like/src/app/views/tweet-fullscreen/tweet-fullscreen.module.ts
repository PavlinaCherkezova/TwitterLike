import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../../shared/shared.module';
import { TweetFullscreenRoutingModule } from './tweet-fullscreen-routing.module';
import { TweetFullscreenComponent } from './tweet-fullscreen.component';

@NgModule({
  imports: [TweetFullscreenRoutingModule, SharedModule, FormsModule, FontAwesomeModule],
  declarations: [TweetFullscreenComponent],
  exports: [TweetFullscreenComponent]
})
export class TweetFullscreenModule { }
