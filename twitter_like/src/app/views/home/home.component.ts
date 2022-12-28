import { Component, OnInit } from '@angular/core';
import { Tweet } from '../../models/tweet';
import { TweetSubmitService } from '../../services/tweet-submit.service';
import * as uuid from "uuid";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  constructor(public tweetService: TweetSubmitService) { }

  ngOnInit() {
  }

}
