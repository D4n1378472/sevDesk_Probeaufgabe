import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyRoutingModule } from './my-routing.module';
import { MyComponent } from './my/my.component';


@NgModule({
  declarations: [
    MyComponent
  ],
  imports: [
    CommonModule,
    MyRoutingModule
  ]
})
export class MyModule { }
