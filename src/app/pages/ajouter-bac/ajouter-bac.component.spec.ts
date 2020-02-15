import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterBacComponent } from './ajouter-bac.component';

describe('AjouterBacComponent', () => {
  let component: AjouterBacComponent;
  let fixture: ComponentFixture<AjouterBacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterBacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterBacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
