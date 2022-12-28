import { Component, Input, OnInit } from '@angular/core';
import { faPersonDotsFromLine } from '@fortawesome/free-solid-svg-icons';
import { Tweet } from '../../models/tweet';
import { TweetSubmitService } from '../../services/tweet-submit.service';


@Component({
  selector: 'app-input-card',
  templateUrl: './input-card.component.html',
  styleUrls: ['./input-card.component.scss']
})

export class InputCardComponent implements OnInit {

  @Input()
  isComment: boolean | undefined;

  @Input()
  tweetId: string | undefined;

  public userIcon = faPersonDotsFromLine;
  public input: string = '';

  constructor(public tweetService: TweetSubmitService) { }

  ngOnInit() {
  }

  public onCommentSubmit(): void {
    this.tweetService.addComment(this.tweetId!, this.tweetService.generateComment(this.input));
    this.input = '';
  }

  public onTweetSubmit(): void {
    this.tweetService.addTweet(this.tweetService.generateTweet(this.input));
    this.input = '';
  }

}
