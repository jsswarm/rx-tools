import {Subscription} from 'rxjs';
import {isSubscription} from './helpers';

export class IvyHandler<C> {
  private cmpInstance: any;

  get cmpDef() {
    return this.target.ngComponentDef;
  }

  constructor(
      public target: any
  ) {
    this.wrapFactory();
    this.wrapOnDestroy();
  }

  public getSubscriptions(): Subscription[] {
    return Object.getOwnPropertyNames(this.cmpInstance)
        .map(prop => this.cmpInstance[prop])
        .filter(isSubscription);
  }

  private wrapFactory() {
    const originalFactory = this.cmpDef.factory;
    this.cmpDef.factory = (...args) => {
      this.cmpInstance = originalFactory(...args);

      return this.cmpInstance;
    };
  }

  private wrapOnDestroy() {
    this.cmpDef.onDestroy = () => {
      if (this.cmpInstance.ngOnDestroy) {
        this.cmpInstance.ngOnDestroy();
      }
      this.getSubscriptions().forEach(subs => subs.unsubscribe());
    };
  }

}
