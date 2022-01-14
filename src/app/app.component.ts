import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TitleService } from './services/title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentTitle!: Observable<string>
  constructor(
    private titleService: TitleService
  ) {
    this.currentTitle = this.titleService.$currentTitle;
  }
}
