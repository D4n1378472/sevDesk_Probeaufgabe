import { Component, Input, OnInit } from '@angular/core';
import { Price } from 'src/app/services/models/price';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit {
  @Input() price!: Price;

  constructor() { }

  ngOnInit(): void {
  }

}
