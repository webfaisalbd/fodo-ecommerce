import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalInfoAreaComponent } from './additional-info-area.component';

describe('AdditionalInfoAreaComponent', () => {
  let component: AdditionalInfoAreaComponent;
  let fixture: ComponentFixture<AdditionalInfoAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditionalInfoAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdditionalInfoAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
