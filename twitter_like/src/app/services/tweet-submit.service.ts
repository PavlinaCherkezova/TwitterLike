import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { Tweet } from '../models/tweet';

@Injectable({
  providedIn: 'root'
})
export class TweetSubmitService {

  public tweetsSubmitted$ = new ReplaySubject<Tweet[]>(1);
  private tweets: Tweet[] = [];

  constructor() { this.tweetsSubmitted$.next(this.tweets);}

  public addTweet(tweet: Tweet): void{
    this.tweets.push(tweet);
    tweet.time.toDateString()
    this.tweetsSubmitted$.next(this.tweets);
  }
}
