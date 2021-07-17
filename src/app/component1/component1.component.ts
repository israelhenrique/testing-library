import { Component, Input, OnInit } from '@angular/core';

interface Item {
  title: string;
  content: string;
}

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  @Input() items: Item[];
  openIndex: number;
  openIndexes: number[]

  constructor() {
    this.openIndex = -1;
    this.openIndexes = [-1];
    this.items = [];
  }

  ngOnInit(): void {
  }

  showContent(index: number) {
    this.openIndex = index;
  }

  // showContent(index: number) {
  //   this.openIndexes = [index];
  // }
}
