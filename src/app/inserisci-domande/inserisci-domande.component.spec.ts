import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InserisciDomandeComponent } from './inserisci-domande.component';

describe('InserisciDomandeComponent', () => {
  let component: InserisciDomandeComponent;
  let fixture: ComponentFixture<InserisciDomandeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InserisciDomandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InserisciDomandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
