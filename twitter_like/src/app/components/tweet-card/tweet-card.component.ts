import { Component, Input, OnInit } from '@angular/core';
import { TweetSubmitService } from '../../services/tweet-submit.service';
import { faHeart, faRetweet, faComment, faArrowUpFromBracket, faPersonDotsFromLine } from '@fortawesome/free-solid-svg-icons';
import { Tweet } from '../../models/tweet';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tweet-card',
  templateUrl: './tweet-card.component.html',
  styleUrls: ['./tweet-card.component.scss']
})
export class TweetCardComponent implements OnInit {

  @Input()
  public tweet: Tweet | undefined;

  @Input()
  public isReply: boolean | undefined;

  public icons = { heart: faHeart, retweet: faRetweet, comment: faComment, share: faArrowUpFromBracket, userIcon: faPersonDotsFromLine };
  constructor(public tweetService: TweetSubmitService, private router: Router) { }

  public ngOnInit() {
    this.router.routeReuseStrategy.shouldReuseRoute = function() { return false; };
  }

  public onAddComment(): void {
    this.router.navigate(['tweet', this.tweet!.id]);
  }
  
  public onRetweet(): void {
    this.tweet!.retweetsCount++;
  }

  public onLike(): void {
    this.tweet!.likesCount++;
  }

  public onShare(): void {

  }
}
