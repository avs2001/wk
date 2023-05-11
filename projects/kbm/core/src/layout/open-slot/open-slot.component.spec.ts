import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenSlotComponent } from './open-slot.component';

describe('OpenSlotComponent', () => {
  let component: OpenSlotComponent;
  let fixture: ComponentFixture<OpenSlotComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [OpenSlotComponent]
    });
    fixture = TestBed.createComponent(OpenSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
