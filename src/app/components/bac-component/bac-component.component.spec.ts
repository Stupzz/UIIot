import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BacComponentComponent } from './bac-component.component';

describe('BacComponentComponent', () => {
  let component: BacComponentComponent;
  let fixture: ComponentFixture<BacComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BacComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BacComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
