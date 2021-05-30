import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomMonthViewComponent } from './custom-month-view.component';

describe('CustomMonthViewComponent', () => {
  let component: CustomMonthViewComponent;
  let fixture: ComponentFixture<CustomMonthViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomMonthViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomMonthViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
