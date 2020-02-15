import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterPlanteComponent } from './ajouter-plante.component';

describe('AjouterPlanteComponent', () => {
  let component: AjouterPlanteComponent;
  let fixture: ComponentFixture<AjouterPlanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterPlanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterPlanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
