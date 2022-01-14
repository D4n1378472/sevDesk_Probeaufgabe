import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/services/title.service';

@Component({
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(private title: TitleService) { }

  ngOnInit(): void {
    this.title.setTitle('Bitcoin Details');
  }

}
