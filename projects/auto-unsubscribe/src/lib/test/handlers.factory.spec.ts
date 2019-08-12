import {TestBed} from '@angular/core/testing';
import { Component } from '@angular/core';
import {handlerFactory} from '../handlers.factory';

@Component({
  template: ``
})
class Dumy {}

describe('handlers.factory', () =>  {
  let component;
  let fixture;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Dumy],
    });

    // create component and test fixture
    fixture = TestBed.createComponent(Dumy);

    // get test component from the fixture
    component = fixture.componentInstance;
  });

  it('should return true when component not present ngComponentDef',  () => {
    console.log(component.ngComponentDef)
    expect(handlerFactory(component)).toBeTruthy();
  });


  it('should return null when component not present ngComponentDef',  () => {
    debugger
    expect(handlerFactory({})).toBe(null);
  });
});
