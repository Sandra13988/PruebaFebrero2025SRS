import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsProfileComponent } from './components.profile.component';

describe('ComponentsProfileComponent', () => {
  let component: ComponentsProfileComponent;
  let fixture: ComponentFixture<ComponentsProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentsProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentsProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
