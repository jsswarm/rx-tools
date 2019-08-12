import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxTrackerComponent } from './rx-tracker.component';

describe('RxTrackerComponent', () => {
  let component: RxTrackerComponent;
  let fixture: ComponentFixture<RxTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
