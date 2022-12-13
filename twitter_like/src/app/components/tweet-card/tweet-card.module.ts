import { NgModule } from '@angular/core';
import { TweetCardComponent } from './tweet-card.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [FormsModule, CommonModule, FontAwesomeModule],
  declarations: [TweetCardComponent],
  exports: [TweetCardComponent]
})
export class TweetCardModule { }
