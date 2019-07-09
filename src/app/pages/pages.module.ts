import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { UnknownComponent } from './unknown/unknown.component';
import {SharedModule} from '../shared/shared.module';



@NgModule({
  declarations: [HomeComponent, UnknownComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PagesModule { }
