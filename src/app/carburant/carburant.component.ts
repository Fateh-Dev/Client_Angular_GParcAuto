import { Component, OnInit } from '@angular/core';
import { summaryHeaderItem } from '../SharedComponents/data-summary-header/data-summary-header.component';

@Component({
  selector: 'app-carburant',
  templateUrl: './carburant.component.html',
  styleUrls: ['./carburant.component.scss'],
})
export class CarburantComponent implements OnInit {
  items: summaryHeaderItem[] = [];
  constructor() {}
  ngOnInit(): void {
    this.items = [
      { title: 'info', data: '00', icon: '' },
      { title: 'info', data: '00', icon: '' },
      { title: 'info', data: '00', icon: '' },
    ];
  }
}
