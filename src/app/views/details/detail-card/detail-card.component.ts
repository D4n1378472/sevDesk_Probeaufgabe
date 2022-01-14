import { Component, Input, OnInit } from '@angular/core';
import { CurrencySymbol } from 'src/app/services/models/currency-symbol';

@Component({
  selector: 'app-detail-card',
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.scss']
})
export class DetailCardComponent implements OnInit {
  @Input() title!: string;
  @Input() currency!: CurrencySymbol;
  @Input() value: number | undefined = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
