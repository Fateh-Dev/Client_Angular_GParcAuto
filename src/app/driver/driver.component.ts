import { Component, OnInit } from '@angular/core';
import { summaryHeaderItem } from '../SharedComponents/data-summary-header/data-summary-header.component';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.scss']
})
export class DriverComponent implements OnInit {
 
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
