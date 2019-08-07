import {Subscription} from 'rxjs';

export function isSubscription(val: any): val is Subscription {
  return val instanceof Subscription || (typeof val.unsubscribe === 'function');
}
