import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { Tweet, Comment } from '../models/tweet';
import * as uuid from "uuid";

@Injectable({
  providedIn: 'root'
})
export class TweetSubmitService {

  public tweetsSubmitted$ = new ReplaySubject<Tweet[]>(1);
  private tweets: Tweet[] = [];
  private loggedInUser = 'John Doe';

  constructor() { 
    const savedTweets = localStorage.getItem('tweets');
    this.tweets = savedTweets && JSON.parse(savedTweets!);
    this.tweets.forEach((tweet) => {tweet.time = new Date(tweet.time)
    if(tweet.comment){
      tweet.comment.forEach((comment) => comment.time = new Date(comment.time))
    }});
    this.tweetsSubmitted$.next(this.tweets); 
  }

  public addTweet(tweet: Tweet): void {
    this.tweets.push(tweet);
    this.tweetsSubmitted$.next(this.tweets);
    localStorage.setItem('tweets', JSON.stringify(this.tweets));
  }

  public addComment(tweetId: string, comment: Comment): void {
    this.tweets.find((tweet) => tweet.id === tweetId)?.comment.push(comment);
    this.tweetsSubmitted$.next(this.tweets);
    localStorage.setItem('tweets', JSON.stringify(this.tweets));
  }

  public getTweets(): Tweet[] {
    return this.tweets;
  }

  public generateTweet(input: string): Tweet {
    return { id: uuid.v4(), author: this.loggedInUser, nickname: `@${this.loggedInUser}`, time: new Date(), text: input, picture: undefined, comment: [], likesCount: 0, retweetsCount: 0 }
  }
  
  public generateComment(input: string): Comment {
    return { id: uuid.v4(), author: this.loggedInUser, nickname: `@${this.loggedInUser}`, time: new Date(), text: input, picture: undefined, comment: [], likesCount: 0, retweetsCount: 0 }
  }
}
