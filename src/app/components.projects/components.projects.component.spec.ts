import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsProjectsComponent } from './components.projects.component';

describe('ComponentsProjectsComponent', () => {
  let component: ComponentsProjectsComponent;
  let fixture: ComponentFixture<ComponentsProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentsProjectsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentsProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
