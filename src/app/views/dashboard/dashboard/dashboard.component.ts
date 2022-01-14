import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { Price } from 'src/app/services/models/price';
import { TitleService } from 'src/app/services/title.service';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  prices!: Observable<Price[]>;

  constructor(
    private title: TitleService,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Dashboard');
    this.prices = this.dataService.getBitcoinPricesAsArray();
  }

}
