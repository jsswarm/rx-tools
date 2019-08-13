import {Subscription} from 'rxjs';
import {isSubscription} from './helpers';

export class IvyHandler<C> {

  get cmpDef() {
    return this.target.ngComponentDef;
  }

  constructor(
      public target: any
  ) {
    this.wrapOnDestroy();
  }

  public getSubscriptions(instance): Subscription[] {
    return Object.getOwnPropertyNames(instance)
        .map(prop => instance[prop])
        .filter(isSubscription);
  }

  private wrapOnDestroy() {
    const unsubscribe = (instance) => this.getSubscriptions(instance)
        .forEach(subs => subs.unsubscribe());

    this.cmpDef.onDestroy = function() {
      // now the this variable holds the component instance.
      unsubscribe(this);
    };
  }

}
