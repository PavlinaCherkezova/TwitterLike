import { Component, OnInit } from '@angular/core';
import { TweetSubmitService } from '../../services/tweet-submit.service';
import { faHeart, faRetweet, faComment, faArrowUpFromBracket, faPersonDotsFromLine} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tweet-card',
  templateUrl: './tweet-card.component.html',
  styleUrls: ['./tweet-card.component.scss']
})
export class TweetCardComponent implements OnInit {
  
  public icons = {heart: faHeart, retweet: faRetweet, comment: faComment, share: faArrowUpFromBracket, userIcon: faPersonDotsFromLine};
  constructor(public tweetService: TweetSubmitService) { }

  public ngOnInit() {

  }

  public onTweetSubmit(): void{

  }
}
