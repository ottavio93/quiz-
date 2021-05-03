import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InsRisposteComponent } from './ins-risposte.component';

describe('InsRisposteComponent', () => {
  let component: InsRisposteComponent;
  let fixture: ComponentFixture<InsRisposteComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InsRisposteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsRisposteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
