import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeCallAreaComponent } from './make-call-area.component';

describe('MakeCallAreaComponent', () => {
  let component: MakeCallAreaComponent;
  let fixture: ComponentFixture<MakeCallAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakeCallAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MakeCallAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
