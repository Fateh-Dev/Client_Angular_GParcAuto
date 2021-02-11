import { Component, OnInit,Input } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AppComponent } from 'src/app/app.component';
import { summaryHeaderItem } from '../data-summary-header/data-summary-header.component';

@Component({
  selector: 'app-data-summary',
  templateUrl: './data-summary.component.html',
  styleUrls: ['./data-summary.component.scss'],
})
export class DataSummaryComponent implements OnInit {
  @Input()
  itemsGros: summaryHeaderItem[] = [];
  constructor() {}
  ngOnInit(): void {
   
  }
}
