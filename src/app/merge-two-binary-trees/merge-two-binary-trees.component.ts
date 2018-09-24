import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-merge-two-binary-trees',
  templateUrl: './merge-two-binary-trees.component.html',
  styleUrls: ['./merge-two-binary-trees.component.css']
})
export class MergeTwoBinaryTreesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  mergeTrees(t1, t2) {
    if (t1 == null) {
      t1 = t2;
    }

    if (t2 == null) {
      t2 = t1;
    }

    t1 =+ t2;

    t1.left = (this.mergeTrees(t1.left, t2.left));
    t1.right = (this.mergeTrees(t1.right, t2.right));
    
    return t1;//Return the merged tree;
  }

}
