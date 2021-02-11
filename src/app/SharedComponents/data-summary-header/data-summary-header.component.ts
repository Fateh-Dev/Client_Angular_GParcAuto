import { Component, Input, OnInit } from '@angular/core';
export interface summaryHeaderItem{
  title: string,
  data: string,
  icon: string
}
@Component({
  selector: 'app-data-summary-header',
  templateUrl: './data-summary-header.component.html',
  styleUrls: ['./data-summary-header.component.scss']
})
// tslint:disable-next-line: class-name

export class DataSummaryHeaderComponent implements OnInit {
  @Input()
  items: summaryHeaderItem[] = [];
  constructor() { }

  ngOnInit(): void {
    
  }

}
