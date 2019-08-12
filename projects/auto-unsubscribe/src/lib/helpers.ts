import {Subscription} from 'rxjs';

export function isSubscription(val: any): val is Subscription {
  return !!val && (val instanceof Subscription || (typeof val.unsubscribe === 'function'));
}

export function getClassSubscriptions(instance) {
  return Object.getOwnPropertyNames(instance)
      .map(prop => instance[prop])
      .filter(isSubscription);
}
