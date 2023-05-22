import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarProjectorComponent } from './navbar-projector.component';

describe('NavbarProjectorComponent', () => {
  let component: NavbarProjectorComponent;
  let fixture: ComponentFixture<NavbarProjectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NavbarProjectorComponent]
    });
    fixture = TestBed.createComponent(NavbarProjectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
