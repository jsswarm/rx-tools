import {handlerFactory} from './handlers.factory';

export function Unsubscriber<C>() {
  return (cmpType) => {
    handlerFactory<C>(cmpType);
    return cmpType;
  };
}
