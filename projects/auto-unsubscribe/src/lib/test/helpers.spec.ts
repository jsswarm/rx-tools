import {Subject} from 'rxjs';
import {isSubscription} from '../helpers';

describe('Helper utils', () => {

  describe('isSubscription', () => {

    it('should return true for Subscription', () => {
      const sub = new Subject();

      expect(isSubscription(sub)).toBeTruthy();
    });
    /*it('should return false for non Subscription', () => {

    })*/
  });
});
