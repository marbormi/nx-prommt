import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPaymentsTableComponent } from './view-payments-table.component';

describe('ViewPaymentsTableComponent', () => {
  let component: ViewPaymentsTableComponent;
  let fixture: ComponentFixture<ViewPaymentsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPaymentsTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewPaymentsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
