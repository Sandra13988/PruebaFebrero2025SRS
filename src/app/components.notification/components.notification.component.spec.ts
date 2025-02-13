import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsNotificationComponent } from './components.notification.component';

describe('ComponentsNotificationComponent', () => {
  let component: ComponentsNotificationComponent;
  let fixture: ComponentFixture<ComponentsNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentsNotificationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentsNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
