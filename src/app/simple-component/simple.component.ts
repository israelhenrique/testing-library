import { Component, Input, OnInit } from '@angular/core';

interface Item {
  title: string;
  content: string;
}

@Component({
  selector: 'simple-component',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css']
})
export class SimpleComponent implements OnInit {

  @Input() data!: string;
  showData = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  show() {
      this.showData = !this.showData
  }

}
