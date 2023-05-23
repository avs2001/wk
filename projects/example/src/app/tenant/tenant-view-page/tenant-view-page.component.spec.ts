import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantViewPageComponent } from './tenant-view-page.component';

describe('TenantViewPageComponent', () => {
  let component: TenantViewPageComponent;
  let fixture: ComponentFixture<TenantViewPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TenantViewPageComponent]
    });
    fixture = TestBed.createComponent(TenantViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
