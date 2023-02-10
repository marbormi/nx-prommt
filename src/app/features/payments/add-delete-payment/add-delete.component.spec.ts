import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDeleteComponent } from './add-delete.component';

describe('AddEditComponent', () => {
  let component: AddDeleteComponent;
  let fixture: ComponentFixture<AddDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
