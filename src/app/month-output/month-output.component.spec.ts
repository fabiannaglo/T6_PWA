import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthOutputComponent } from './month-output.component';

describe('MonthOutputComponent', () => {
  let component: MonthOutputComponent;
  let fixture: ComponentFixture<MonthOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthOutputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
