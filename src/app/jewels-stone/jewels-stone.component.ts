import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jewels-stone',
  templateUrl: './jewels-stone.component.html',
  styleUrls: ['./jewels-stone.component.css']
})
export class JewelsStoneComponent implements OnInit {
  stonesIhave: string;
  jewelsThereAre: string;
  result: number;
  match: any;

  constructor() { }

  ngOnInit() {
  }

  numJewelsInStones() {
    this.stonesIhave = "ZZ";
    this.jewelsThereAre = "z";
    this.match = 0;

    for (let i = 0; i < this.stonesIhave.length; i++) {
      for (let j = 0; j < this.jewelsThereAre.length; j++) {
        if (this.stonesIhave.charAt(i) === this.jewelsThereAre.charAt(j)) {
          this.match++;
        }
      }
    }

  }

}
