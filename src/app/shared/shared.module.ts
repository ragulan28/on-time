import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DetailCardComponent} from './detail-card/detail-card.component';
import {MaterialModule} from '../material.module';


@NgModule({
  declarations: [DetailCardComponent],
  exports: [
    DetailCardComponent
  ],
  imports: [
    MaterialModule,
    CommonModule
  ]
})
export class SharedModule {
}
