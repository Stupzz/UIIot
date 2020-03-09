import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeBacComponent } from './edite-bac.component';

describe('EditeBacComponent', () => {
  let component: EditeBacComponent;
  let fixture: ComponentFixture<EditeBacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditeBacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditeBacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
