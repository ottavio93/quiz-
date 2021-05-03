import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TutteRisposteComponent } from './tutte-risposte.component';

describe('TutteRisposteComponent', () => {
  let component: TutteRisposteComponent;
  let fixture: ComponentFixture<TutteRisposteComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TutteRisposteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutteRisposteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
