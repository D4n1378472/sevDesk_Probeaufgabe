import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BehaviorSubject, delay, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  private _currentTitle = new BehaviorSubject<string>('');
  $currentTitle!: Observable<string>;

  constructor(
    private title: Title
  ) {
    this.$currentTitle = this._currentTitle.pipe(delay(0));
  }

  setTitle(title: string) {
    this.title.setTitle(title);
    this._currentTitle.next(title);
  }
}
