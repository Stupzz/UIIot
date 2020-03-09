import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptorFormComponent } from './captor-form.component';

describe('CaptorFormComponent', () => {
  let component: CaptorFormComponent;
  let fixture: ComponentFixture<CaptorFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaptorFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaptorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
