import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-lower-case',
  templateUrl: './to-lower-case.component.html',
  styleUrls: ['./to-lower-case.component.css']
})
export class ToLowerCaseComponent implements OnInit {
  input: string;

  constructor() { }

  ngOnInit() {
  }

  toLowerCase() {
    this.input = 'LOVELY';
    this.input = this.input.toLowerCase();
  }
}
