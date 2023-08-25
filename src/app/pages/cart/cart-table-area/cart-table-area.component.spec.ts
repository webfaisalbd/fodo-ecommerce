import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartTableAreaComponent } from './cart-table-area.component';

describe('CartTableAreaComponent', () => {
  let component: CartTableAreaComponent;
  let fixture: ComponentFixture<CartTableAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartTableAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartTableAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
