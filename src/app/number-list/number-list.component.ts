import { Component, OnInit } from '@angular/core';
import { NumberServiceService } from '../number-service.service';

@Component({
  selector: 'app-number-list',
  templateUrl: './number-list.component.html',
  styleUrls: ['./number-list.component.css']
})
export class NumberListComponent implements OnInit {

  text = "List of numbers:";
  numbers = [];

  constructor(private numberServiceService: NumberServiceService) {

  }

  ngOnInit() {
    this.numbers = this.numberServiceService.getNumbers();
  }

}
