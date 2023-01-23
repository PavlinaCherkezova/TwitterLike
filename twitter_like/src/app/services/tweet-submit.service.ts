import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { Tweet } from '../models/tweet';
import * as uuid from "uuid";
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class TweetSubmitService {

  public tweetsSubmitted$ = new ReplaySubject<Tweet[]>(1);
  private tweets: Tweet[] = [];

  constructor(private authenticationService: AuthenticationService) {
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

  public getTweetByUser(author: string): Tweet[] | [] {
    const findTweet = (array: Tweet[], author: string) => {
      let result: Tweet[] = [];
      array.some(
        (child) =>
          (child.author === author && (result.push(child))) ||
          (result = findTweet(child.comment || [], author))
      );
      return result;
    };

    return findTweet(this.tweets, author);
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

  public generateTweet(input: string, imageSrc: string): Tweet {
    return { id: uuid.v4(), author: this.authenticationService.loggedUser!.credentials.username, nickname: this.authenticationService.loggedUser!.nickname, time: new Date(), text: input, picture: imageSrc, comment: [], likesCount: 0, retweetsCount: 0 }
  }

}
