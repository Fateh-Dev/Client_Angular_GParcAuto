import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChartCarburantComponent } from './bar-chart-carburant.component';

describe('BarChartCarburantComponent', () => {
  let component: BarChartCarburantComponent;
  let fixture: ComponentFixture<BarChartCarburantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarChartCarburantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarChartCarburantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
