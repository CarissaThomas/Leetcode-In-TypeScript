import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-judge-route-circle',
  templateUrl: './judge-route-circle.component.html',
  styleUrls: ['./judge-route-circle.component.css']
})
export class JudgeRouteCircleComponent implements OnInit {
  moves: string;
  position: number[];
  circle: boolean;

  constructor() { }

  ngOnInit() {
  }

   
  judgeCircle() {
    this.moves = 'DURDLDRRLL';
    this.position = [0,0];

    for (let i = 0; i < this.moves.length; i++) {
      for (let j = 0; j < this.moves[i].length; j++) {
        switch(this.moves[i][j]) {
          case 'U':
              this.position[1] = this.position[1] + 1;
              break;
          case 'D':
              this.position[1] = this.position[1] - 1;
              break;
          case 'R':
             this.position[0] = this.position[0] + 1;
              break;
          case 'L':
              this.position[0] = this.position[0] - 1;
              break;
          default:
      }
      }
    }

    if (this.position[0] === 0 && this.position[1] === 0) {
      this.circle = true;
      return true;
    } else {
      this.circle = false;
      return false;
    }
  }
}
