import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { TweetSubmitService } from '../../services/tweet-submit.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(public authenticationService: AuthenticationService, public tweetService: TweetSubmitService) { }

  ngOnInit() {
  }

}
