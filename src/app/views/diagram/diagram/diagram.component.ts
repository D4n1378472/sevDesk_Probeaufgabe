import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/services/title.service';

@Component({
  templateUrl: './diagram.component.html',
  styleUrls: ['./diagram.component.scss']
})
export class DiagramComponent implements OnInit {

  constructor(private title: TitleService) { }

  ngOnInit(): void {
    this.title.setTitle('Bitcoin Diagramm');
  }

}
