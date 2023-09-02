import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactBreadcrumbAreaComponent } from './contact-breadcrumb-area.component';

describe('ContactBreadcrumbAreaComponent', () => {
  let component: ContactBreadcrumbAreaComponent;
  let fixture: ComponentFixture<ContactBreadcrumbAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactBreadcrumbAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactBreadcrumbAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
