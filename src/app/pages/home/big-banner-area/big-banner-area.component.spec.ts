import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigBannerAreaComponent } from './big-banner-area.component';

describe('BigBannerAreaComponent', () => {
  let component: BigBannerAreaComponent;
  let fixture: ComponentFixture<BigBannerAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigBannerAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BigBannerAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
