import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsRegulationsComponent } from './components.regulations.component';

describe('ComponentsRegulationsComponent', () => {
  let component: ComponentsRegulationsComponent;
  let fixture: ComponentFixture<ComponentsRegulationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentsRegulationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentsRegulationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
