import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DetailsreportsComponent } from './detailsreports.component';

describe('DetailsreportsComponent', () => {
  let component: DetailsreportsComponent;
  let fixture: ComponentFixture<DetailsreportsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsreportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsreportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
