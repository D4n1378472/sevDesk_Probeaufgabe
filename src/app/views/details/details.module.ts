import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsRoutingModule } from './details-routing.module';
import { DetailsComponent } from './details/details.component';
import { DetailCardComponent } from './detail-card/detail-card.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    DetailsComponent,
    DetailCardComponent
  ],
  imports: [
    CommonModule,
    DetailsRoutingModule,
    MatCardModule
  ]
})
export class DetailsModule { }
