import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistTableAreaComponent } from './wishlist-table-area.component';

describe('WishlistTableAreaComponent', () => {
  let component: WishlistTableAreaComponent;
  let fixture: ComponentFixture<WishlistTableAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WishlistTableAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WishlistTableAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
