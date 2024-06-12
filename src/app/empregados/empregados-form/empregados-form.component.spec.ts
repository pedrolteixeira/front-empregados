import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpregadosFormComponent } from './empregados-form.component';

describe('EmpregadosFormComponent', () => {
  let component: EmpregadosFormComponent;
  let fixture: ComponentFixture<EmpregadosFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpregadosFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmpregadosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
