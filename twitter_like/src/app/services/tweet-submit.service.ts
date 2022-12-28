import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { Tweet } from '../models/tweet';
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
    this.tweets = savedTweets && JSON.parse(savedTweets!) || [];

    this.fixDateFormat();

    this.tweetsSubmitted$.next(this.tweets);
  }

  public addTweet(tweet: Tweet): void {
    this.tweets.push(tweet);
    this.tweetsSubmitted$.next(this.tweets);
    localStorage.setItem('tweets', JSON.stringify(this.tweets));
  }

  public addComment(tweetId: string, comment: Tweet): void {
    this.getTweetById(tweetId)?.comment.push(comment);
    this.tweetsSubmitted$.next(this.tweets);
    localStorage.setItem('tweets', JSON.stringify(this.tweets));
  }

  public getTweets(): Tweet[] {
    return this.tweets;
  }

  public getTweetById(id: string): Tweet | undefined {
    const findTweet = (array: Tweet[], id: string) => {
      let result: Tweet | undefined;
      array.some(
        (child) =>
          (child.id === id && (result = child)) ||
          (result = findTweet(child.comment || [], id))
      );
      return result;
    };

    return findTweet(this.tweets, id);
  }

  public fixDateFormat(): void {
    const loopOver = (array: Tweet[]) => {
      array.forEach(
        (child) => {
          child.time = new Date(child.time);
          child.comment.length > 0 && loopOver(child.comment);
        }
      );
    };

    this.tweets.length > 0 && loopOver(this.tweets);
  }

  public generateTweet(input: string): Tweet {
    return { id: uuid.v4(), author: this.loggedInUser, nickname: `@${this.loggedInUser}`, time: new Date(), text: input, picture: undefined, comment: [], likesCount: 0, retweetsCount: 0 }
  }

  public generateComment(input: string): Tweet {
    return { id: uuid.v4(), author: this.loggedInUser, nickname: `@${this.loggedInUser}`, time: new Date(), text: input, picture: undefined, comment: [], likesCount: 0, retweetsCount: 0 }
  }
}
