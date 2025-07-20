import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastWithConfettiTemplateComponentComponent } from './toast-with-confetti-template-component.component';

describe('ToastWithConfettiTemplateComponentComponent', () => {
  let component: ToastWithConfettiTemplateComponentComponent;
  let fixture: ComponentFixture<ToastWithConfettiTemplateComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToastWithConfettiTemplateComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToastWithConfettiTemplateComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
