import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistBreadcrumbAreaComponent } from './wishlist-breadcrumb-area.component';

describe('WishlistBreadcrumbAreaComponent', () => {
  let component: WishlistBreadcrumbAreaComponent;
  let fixture: ComponentFixture<WishlistBreadcrumbAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WishlistBreadcrumbAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WishlistBreadcrumbAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
