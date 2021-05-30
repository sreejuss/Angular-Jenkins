import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomYearViewComponent } from './custom-year-view.component';

describe('CustomYearViewComponent', () => {
  let component: CustomYearViewComponent;
  let fixture: ComponentFixture<CustomYearViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomYearViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomYearViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
