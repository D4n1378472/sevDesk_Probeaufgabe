import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { Details } from 'src/app/services/models/details';
import { TitleService } from 'src/app/services/title.service';

@Component({
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  details!: Observable<Details>;

  constructor(
    private title: TitleService,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Bitcoin Details');
    this.details = this.dataService.getDetails();
  }

}
