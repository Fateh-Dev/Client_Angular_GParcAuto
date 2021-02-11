import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSummaryHeaderComponent } from './data-summary-header.component';

describe('DataSummaryHeaderComponent', () => {
  let component: DataSummaryHeaderComponent;
  let fixture: ComponentFixture<DataSummaryHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataSummaryHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataSummaryHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
