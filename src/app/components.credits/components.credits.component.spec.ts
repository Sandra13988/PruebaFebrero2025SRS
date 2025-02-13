import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsCreditsComponent } from './components.credits.component';

describe('ComponentsCreditsComponent', () => {
  let component: ComponentsCreditsComponent;
  let fixture: ComponentFixture<ComponentsCreditsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentsCreditsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentsCreditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
