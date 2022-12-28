import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TweetFullscreenComponent } from './tweet-fullscreen.component';

const routes: Routes = [
  { path: '', component: TweetFullscreenComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [],
  exports: [RouterModule],
})
export class TweetFullscreenRoutingModule { }
