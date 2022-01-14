import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  private _currentTitle = new BehaviorSubject<string>('');
  $currentTitle!: Observable<string>;

  constructor(
    private title: Title
  ) {
    this.$currentTitle = this._currentTitle.asObservable();
  }

  setTitle(title: string) {
    this.title.setTitle(title);
    this._currentTitle.next(title);
  }
}
