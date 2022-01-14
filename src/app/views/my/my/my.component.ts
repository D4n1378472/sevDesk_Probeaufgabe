import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/services/title.service';

@Component({
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.scss']
})
export class MyComponent implements OnInit {

  constructor(private title: TitleService) { }

  ngOnInit(): void {
    this.title.setTitle('Meine Bitcoin');
  }

}
