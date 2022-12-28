import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tweet } from '../../models/tweet';
import { TweetSubmitService } from '../../services/tweet-submit.service';

@Component({
  selector: 'app-tweet-fullscreen',
  templateUrl: './tweet-fullscreen.component.html',
  styleUrls: ['./tweet-fullscreen.component.scss']
})
export class TweetFullscreenComponent implements OnInit {

  public tweet: Tweet | undefined;
  constructor(private activatedRoute: ActivatedRoute, private tweetSubmitService: TweetSubmitService, private router: Router) { }

  public ngOnInit() {
    this.listenForIdChange();
   // this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  // public ngOnDestroy() {
  //   this.router.routeReuseStrategy.shouldReuseRoute = () => true;
  // }

  private listenForIdChange() {
    this.activatedRoute.params.subscribe((params) => {
      this.tweet = this.tweetSubmitService.getTweets().find((tweet) => tweet.id = params['id']);
    })
  }

}
