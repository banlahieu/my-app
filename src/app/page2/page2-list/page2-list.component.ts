import { Component, OnInit } from '@angular/core';
import { Page2Service } from './page2-list.service';

@Component({
  selector: 'app-page2-list',
  templateUrl: './page2-list.component.html',
  styleUrls: ['./page2-list.component.scss']
})
export class Page2ListComponent implements OnInit {

  predictedNumber: any;

  log: any;

  constructor(private service: Page2Service) { }

  ngOnInit() {
  }

  predict() {
    console.log(this.service.getData());
  }
}
