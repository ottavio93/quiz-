import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UploadQuizComponent } from './upload-quiz.component';

describe('UploadQuizComponent', () => {
  let component: UploadQuizComponent;
  let fixture: ComponentFixture<UploadQuizComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
