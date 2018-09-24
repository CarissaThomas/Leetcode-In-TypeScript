import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transpose-matrix',
  templateUrl: './transpose-matrix.component.html',
  styleUrls: ['./transpose-matrix.component.css']
})
export class TransposeMatrixComponent implements OnInit {
  input: number[][];
  output: any[];

  constructor() { }

  ngOnInit() {
  }


  transpose() {
    this.input = [[1,2,3],[4,5,6],[7,8,9]];//[[1,4,7],[2,5,8],[3,6,9]]
    this.output = [];

    for (let y = 0; y < this.input.length; y++) {//Create your new array first with the proper length
      this.output.push([]);      
    }

    for (let i = 0; i < this.input.length; i++) {//3
      for (let j = 0; j < this.input[i].length; j++) {//3
        this.output[j].push(this.input[i][j]);//0, 00 / 1, 11
      }
    }

  }

}
