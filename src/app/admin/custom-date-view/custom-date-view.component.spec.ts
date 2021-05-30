import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDateViewComponent } from './custom-date-view.component';

describe('CustomDateViewComponent', () => {
  let component: CustomDateViewComponent;
  let fixture: ComponentFixture<CustomDateViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomDateViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomDateViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
