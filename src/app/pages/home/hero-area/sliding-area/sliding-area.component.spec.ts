import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidingAreaComponent } from './sliding-area.component';

describe('SlidingAreaComponent', () => {
  let component: SlidingAreaComponent;
  let fixture: ComponentFixture<SlidingAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlidingAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlidingAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
