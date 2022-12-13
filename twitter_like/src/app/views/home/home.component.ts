import { Component, OnInit } from '@angular/core';
import { Tweet } from '../../models/tweet';
import { TweetSubmitService } from '../../services/tweet-submit.service';
import { faPersonDotsFromLine} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  private loggedInUser = 'John Doe';
  public userIcon = faPersonDotsFromLine;
  public input: string = '';

  constructor(public tweetService: TweetSubmitService) { }

  ngOnInit() {
  }

  public onTweetSubmit(): void {
    this.tweetService.addTweet(this.generateTweet(this.input));
    this.input = '';
  }

  private generateTweet(input: string): Tweet {
    return { author: this.loggedInUser, nickname: `@${this.loggedInUser}`, time: new Date(), text: input, picture: undefined, commentsCount: 0, likesCount: 0, retweetsCount: 0 }
  }
}
