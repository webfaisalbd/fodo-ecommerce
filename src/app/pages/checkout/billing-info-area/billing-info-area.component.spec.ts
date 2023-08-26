import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingInfoAreaComponent } from './billing-info-area.component';

describe('BillingInfoAreaComponent', () => {
  let component: BillingInfoAreaComponent;
  let fixture: ComponentFixture<BillingInfoAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillingInfoAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillingInfoAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
