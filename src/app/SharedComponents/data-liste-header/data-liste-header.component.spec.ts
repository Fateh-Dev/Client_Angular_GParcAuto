import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataListeHeaderComponent } from './data-liste-header.component';

describe('DataListeHeaderComponent', () => {
  let component: DataListeHeaderComponent;
  let fixture: ComponentFixture<DataListeHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataListeHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataListeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
