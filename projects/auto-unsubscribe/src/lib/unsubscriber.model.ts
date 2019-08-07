import {Type} from '@angular/core';
import {Observable, Subscription} from 'rxjs';

// export interface UnsubscriberConfig<C = any> {
//   props: Array<keyof C>;
// }

export abstract class UnsubscriberHandler<C> {
  constructor(
      public target: Type<C>
  ) {}

  abstract getSubscriptions: () => Subscription[];
}


