import {CommonModule} from '@angular/common';
import {NgModule, ApplicationRef} from '@angular/core';
import {getClassSubscriptions} from '../../../projects/auto-unsubscribe/src/lib/helpers';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class RxTrackerModule {

  constructor(appRef: ApplicationRef) {
    setTimeout(() => {
      const instances = this.getComponents();
      const subscriptions = instances
        .map(instance => ({instance: instance.constructor.name, subsucriptions: getClassSubscriptions(instance)}))
        .filter(map => map.subsucriptions.length)
      console.log(subscriptions);
    }, 1000);
  }

  getComponents() {
    const root = (window as any).getAllAngularRootElements()[0];
    const elements = root.getElementsByTagName('*');
    const instances = [];
    for (let i = 0; i < elements.length; i++) {
      const cmp = this.getComponent(elements[i]);
      cmp && instances.push(cmp);
    }
    return instances;
  }

  isComponent(element) {
    return !!element.__ngContext__;
  }

  getComponent(element) {
    if (this.isComponent(element)) {
      const context = element.__ngContext__;
      return context[context.length - 1];
    }
    return null;
  }
}
