import {Component, ViewChild, ElementRef, OnInit} from '@angular/core';
import {Unsubscriber} from '../../../auto-unsubscribe/src/lib/unsubscriber';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'rx-tracker';
  @ViewChild('iframe', {static: true}) iframe: ElementRef<HTMLIFrameElement>;

  public ngOnInit(): void {
    console.dir(this.iframe.nativeElement);
  }

}
