import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.scss']
})
export class MyComponent implements OnInit {

  constructor(private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle('Meine Bitcoin');
  }

}
