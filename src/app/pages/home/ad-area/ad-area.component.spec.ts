import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdAreaComponent } from './ad-area.component';

describe('AdAreaComponent', () => {
  let component: AdAreaComponent;
  let fixture: ComponentFixture<AdAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
