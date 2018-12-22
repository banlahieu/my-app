import { Component, OnInit } from '@angular/core';
import { Page1 } from '../share/page1.model';
import { Page1Service } from './page1-list.service';
import * as tf from '@tensorflow/tfjs';

@Component({
  selector: 'app-page1-list',
  templateUrl: './page1-list.component.html',
  styleUrls: ['./page1-list.component.scss']
})
export class Page1ListComponent implements OnInit {

  page1 = new Page1('FPTA', 10);
  name = '';

  predictedNumber: number;

  constructor(private service: Page1Service
    
  ) { }

  ngOnInit() {
    
  }

  onSubmit(){
    console.log(this.page1.name);
    this.service.insert(this.name)
    .subscribe(
      data => console.log('success', data),
      error => console.log('error')
    )
  }

  predict() {
    this.predictedNumber = 3;
  }

}
