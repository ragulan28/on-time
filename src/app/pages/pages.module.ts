import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { UnknownComponent } from './unknown/unknown.component';



@NgModule({
  declarations: [HomeComponent, UnknownComponent],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
