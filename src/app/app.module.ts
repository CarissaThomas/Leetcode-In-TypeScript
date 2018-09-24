import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TwoSumComponent } from './two-sum/two-sum.component';
import { JewelsStoneComponent } from './jewels-stone/jewels-stone.component';
import { FlippingAnImageComponent } from './flipping-an-image/flipping-an-image.component';
import { JudgeRouteCircleComponent } from './judge-route-circle/judge-route-circle.component';
import { MergeTwoBinaryTreesComponent } from './merge-two-binary-trees/merge-two-binary-trees.component';
import { ToLowerCaseComponent } from './to-lower-case/to-lower-case.component';
import { LinkedListComponent } from './linked-list/linked-list.component';
import { TransposeMatrixComponent } from './transpose-matrix/transpose-matrix.component';


@NgModule({
  declarations: [
    AppComponent,
    TwoSumComponent,
    JewelsStoneComponent,
    FlippingAnImageComponent,
    JudgeRouteCircleComponent,
    MergeTwoBinaryTreesComponent,
    ToLowerCaseComponent,
    LinkedListComponent,
    TransposeMatrixComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
