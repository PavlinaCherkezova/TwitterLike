import { Component, Input, OnInit } from '@angular/core';
import { faPersonDotsFromLine } from '@fortawesome/free-solid-svg-icons';
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

  public onContentPaste(event: ClipboardEvent): void {
    const clipboardData = event.clipboardData || (window as any).clipboardData;
    const items: DataTransferItem[] = Array.from(clipboardData.items);
    const imageData = items.find(x => /image/i.test(x.type));

    if (imageData) {
      let blob = imageData.getAsFile();
      let reader = new FileReader();

      reader.onload = function (e) {
        if (e.target && e.target.result){
          let img = new Image();
          img.src = e.target!.result!.toString();
          img.width = 128;
          img.height = 128;
          img.style.margin = '5px';
  
          document.getElementById('images-container')!.appendChild(img);
        }
      }

      reader.readAsDataURL(blob as Blob);
    }
  }

}
