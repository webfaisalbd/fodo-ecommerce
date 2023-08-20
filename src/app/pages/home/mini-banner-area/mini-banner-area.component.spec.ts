import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniBannerAreaComponent } from './mini-banner-area.component';

describe('MiniBannerAreaComponent', () => {
  let component: MiniBannerAreaComponent;
  let fixture: ComponentFixture<MiniBannerAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniBannerAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiniBannerAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
