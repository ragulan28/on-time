import { Component, OnInit } from '@angular/core';
import * as WOW from 'wow.js/dist/wow';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    new WOW().init();
  }

}
