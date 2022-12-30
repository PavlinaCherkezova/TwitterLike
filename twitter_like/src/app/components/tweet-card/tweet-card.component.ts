import { Component, Input, OnInit } from '@angular/core';
import { TweetSubmitService } from '../../services/tweet-submit.service';
import { faHeart, faRetweet, faComment, faArrowUpFromBracket, faPersonDotsFromLine } from '@fortawesome/free-solid-svg-icons';
import { Tweet } from '../../models/tweet';
import { Router } from '@angular/router';
import { AppParameters } from '../../AppParameters';

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
  
  public onImageLoad(event: Event) {
    const image = event.target as HTMLImageElement;
    if(image.width > AppParameters.image.max_width || image.height > AppParameters.image.max_height){
      let ratio = Math.min(AppParameters.image.max_width / image.width, AppParameters.image.max_height / image.height);
      image.width *= ratio;
      //image.height *= ratio;
    }
  };

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
