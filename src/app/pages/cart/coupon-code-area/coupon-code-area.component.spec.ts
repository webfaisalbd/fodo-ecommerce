import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponCodeAreaComponent } from './coupon-code-area.component';

describe('CouponCodeAreaComponent', () => {
  let component: CouponCodeAreaComponent;
  let fixture: ComponentFixture<CouponCodeAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CouponCodeAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CouponCodeAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
