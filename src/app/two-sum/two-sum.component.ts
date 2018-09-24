import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-sum',
  templateUrl: './two-sum.component.html',
  styleUrls: ['./two-sum.component.css']
})
export class TwoSumComponent implements OnInit {
  nums: number[];
  target: number;
  success: number[];

  constructor() { 
    
    this.success = [];
  }

  ngOnInit() {
    
  }

  twoSum() {
    this.nums = [3, 2, 3];
    this.target = 6;

    for (let i = 0; i < this.nums.length; i++) {
      for (let j = i + 1; j < this.nums.length; j++) {
        if (this.nums[i] + this.nums[j] === this.target) {
          this.success = [i , j];
        }
      }
      
    }
  }

}
