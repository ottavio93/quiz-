import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PlayRisposteComponent } from './play-risposte.component';

describe('PlayRisposteComponent', () => {
  let component: PlayRisposteComponent;
  let fixture: ComponentFixture<PlayRisposteComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayRisposteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayRisposteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
