import {IvyHandler} from './ivy-handler';
const isIvy = (cmpType) => !!cmpType.ngComponentDef;

export function handlerFactory<C>(cmpType) {
  // TODO: create handler for ngcc compiler.
  return isIvy(cmpType) ?
      new IvyHandler<C>(cmpType) :
      null;
}
