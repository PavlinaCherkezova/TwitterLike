import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InputCardModule } from '../components/input-card/input-card.module';
import { SideMenuModule } from '../components/side-menu/side-menu.module';
import { TweetCardModule } from '../components/tweet-card/tweet-card.module';

@NgModule({
  imports: [CommonModule, RouterModule, SideMenuModule, TweetCardModule, InputCardModule],
  exports: [CommonModule, RouterModule, SideMenuModule, TweetCardModule,InputCardModule],
})
export class SharedModule { }
