import {Component, OnInit, OnDestroy} from '@angular/core';
import {timer, Subscription} from 'rxjs';
import {tap} from 'rxjs/operators';
import {Unsubscriber} from '../../../projects/auto-unsubscribe/src/lib/unsubscriber';

@Unsubscriber()
@Component({
  selector: 'app-reactive-component',
  templateUrl: './reactive-component.component.html',
  styleUrls: ['./reactive-component.component.css']
})
export class ReactiveComponentComponent implements OnInit {

  private counterSubs: Subscription;
  private timer: Subscription = timer(0, 1000).pipe(tap(console.log)).subscribe();
  private timer1: Subscription = timer(0, 1000).pipe(tap(console.log)).subscribe();
  private timer2: Subscription = timer(0, 1000).pipe(tap(console.log)).subscribe();
  private timer3: Subscription = timer(0, 1000).pipe(tap(console.log)).subscribe();
  private timer4: Subscription = timer(0, 1000).pipe(tap(console.log)).subscribe();
  private timer5: Subscription = timer(0, 1000).pipe(tap(console.log)).subscribe();
  private timer6: Subscription = timer(0, 1000).pipe(tap(console.log)).subscribe();
  private timer7: Subscription = timer(0, 1000).pipe(tap(console.log)).subscribe();
  public counter: number;

  constructor() { }

  ngOnInit() {
    this.counterSubs = timer(0, 1000)
      .pipe(
          tap(console.log)
      ).subscribe(c => this.counter = c);
  }

  // ngOnDestroy() {
  //   console.log('counter stopped at ' + this.counter);
  // }

}
