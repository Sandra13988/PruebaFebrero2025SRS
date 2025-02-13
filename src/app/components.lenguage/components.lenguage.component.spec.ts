import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsLenguageComponent } from './components.lenguage.component';

describe('ComponentsLenguageComponent', () => {
  let component: ComponentsLenguageComponent;
  let fixture: ComponentFixture<ComponentsLenguageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentsLenguageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentsLenguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
