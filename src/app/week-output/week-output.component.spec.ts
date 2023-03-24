import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekOutputComponent } from './week-output.component';

describe('WeekOutputComponent', () => {
  let component: WeekOutputComponent;
  let fixture: ComponentFixture<WeekOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeekOutputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeekOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
