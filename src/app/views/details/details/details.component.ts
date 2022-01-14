import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { Details } from 'src/app/services/models/details';
import { TitleService } from 'src/app/services/title.service';

@Component({
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {

  details!: Details;

  private _destroyComponent = new Subject<boolean>();

  constructor(
    private title: TitleService,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Bitcoin Details');
    this.dataService.getDetails().pipe(takeUntil(this._destroyComponent)).subscribe(data => {
      this.details = data;
    });
  }

  ngOnDestroy(): void {
      this._destroyComponent.next(true);
      this._destroyComponent.complete();
  }

}
