import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-linked-list',
  templateUrl: './linked-list.component.html',
  styleUrls: ['./linked-list.component.css']
})
export class LinkedListComponent implements OnInit {
  middleIndex: number;
  input: number[];
  list: number[];

  constructor() { }

  ngOnInit() {
  }

  linkedList() {
    this.input = [1,2,3,4,5,6];
    this.list = [];

    if (this.input.length % 2 > 0) {
      this.middleIndex = Math.round(this.input.length / 2) - 1;
    } else {
      this.middleIndex = Math.round(this.input.length / 2);//If its an even number push it to the higher values 
    }

    for (let i = this.middleIndex; i < this.input.length; i++) {
      this.list.push(this.input[i]);
    }
    
    return this.list;
  }

}
