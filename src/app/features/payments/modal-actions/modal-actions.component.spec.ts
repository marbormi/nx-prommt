import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentModalActionsComponent } from './modal-actions.component';

describe('AddEditComponent', () => {
  let component: PaymentModalActionsComponent;
  let fixture: ComponentFixture<PaymentModalActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentModalActionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentModalActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
