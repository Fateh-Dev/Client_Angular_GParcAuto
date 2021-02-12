import { Component, OnInit } from '@angular/core';
import { summaryHeaderItem } from '../SharedComponents/data-summary-header/data-summary-header.component';

@Component({
  selector: 'app-vehicule',
  templateUrl: './vehicule.component.html',
  styleUrls: ['./vehicule.component.scss']
})
export class VehiculeComponent implements OnInit {

  items: summaryHeaderItem[] = [];
  constructor() {}
  ngOnInit(): void {
    this.items = [
      { title: 'info', data: '00', icon: '' },
      { title: 'info', data: '00', icon: '' },
      { title: 'info', data: '00', icon: '' }, 
      { title: 'info', data: '00', icon: '' }, 
    ];
  }
}
