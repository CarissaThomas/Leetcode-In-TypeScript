import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flipping-an-image',
  templateUrl: './flipping-an-image.component.html',
  styleUrls: ['./flipping-an-image.component.css']
})
export class FlippingAnImageComponent implements OnInit {
  input: number[][];
  output: number[][];

  constructor() { }

  ngOnInit() {
  }


  flipAndInvertImage() {
    this.input = [[1,1,0],[1,0,1],[0,0,0]];

    for (let i = 0; i < this.input.length; i++) {
      this.input[i].reverse();
      for (let j = 0; j < this.input[i].length; j++) {
        if (this.input[i][j] === 0) {
          this.input[i][j] = 1;
        } else {
          this.input[i][j] = 0;
        }
      }
    }
    return this.input;
  }
}
