import { Component, Input, OnInit } from '@angular/core';
import { faPersonDotsFromLine } from '@fortawesome/free-solid-svg-icons';
import { TweetSubmitService } from '../../services/tweet-submit.service';
import { AppParameters } from '../../AppParameters';

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
  private imageSrc: string = '';

  constructor(public tweetService: TweetSubmitService) { }

  ngOnInit() {
    const textArea = document.querySelector('textarea');
    textArea!.addEventListener('keyup', () => this.dynamicallyResize(textArea));
  }

  public dynamicallyResize(el: HTMLTextAreaElement | null): void {
    if(Math.ceil(el!.getBoundingClientRect().height) < el!.scrollHeight){
      el!.style.height = (el!.scrollHeight + 25)+"px";
    }
  }
  public onCommentSubmit(): void {
    this.tweetService.addComment(this.tweetId!, this.tweetService.generateComment(this.input, this.imageSrc));
    this.input = '';
  }

  public onTweetSubmit(): void {
    this.tweetService.addTweet(this.tweetService.generateTweet(this.input, this.imageSrc));
    this.input = '';
  }

  public onContentPaste(event: ClipboardEvent): void {
    const clipboardData = event.clipboardData || (window as any).clipboardData;
    const items: DataTransferItem[] = Array.from(clipboardData.items);
    const imageData = items.find(x => /image/i.test(x.type));

    if (imageData) {
      let blob = imageData.getAsFile();
      let reader = new FileReader();

      reader.onload = (e) => {
        if (e.target && e.target.result) {
          this.imageSrc = e.target!.result!.toString();

          let img = new Image();
          img.src = this.imageSrc;
          let ratio = Math.min(AppParameters.image.max_width / img.width, AppParameters.image.max_height / img.height);
          img.width *= ratio;
          img.height *= ratio;
          img.style.margin = '5px';

          document.getElementById('images-container')!.appendChild(img);
        }
      }

      reader.readAsDataURL(blob as Blob);
    }
  }

}
