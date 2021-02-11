import { Component, Input, OnInit } from '@angular/core';
export interface summaryHeaderItemListe {
  title: string;
  data: string[];
}
@Component({
  selector: 'app-data-liste-header',
  templateUrl: './data-liste-header.component.html',
  styleUrls: ['./data-liste-header.component.scss'],
})
export class DataListeHeaderComponent implements OnInit {
  @Input()
  items!: summaryHeaderItemListe;
  constructor() {}

  ngOnInit(): void {
  }
}
