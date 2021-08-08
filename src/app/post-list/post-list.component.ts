import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  @Input() title: string = "";
  @Input() content: string = "";
  @Input() loveIt: Number = 1;
  @Input() created_at: Date = new Date();


  constructor() { }

  ngOnInit(): void {
  }

  fLoveIt() {
    return this.loveIt = 2;
  }

  dontLoveIt() {
    return this.loveIt = 3;
  }

  getColor() {
    if (this.loveIt === 1) {
      return 'black';
    } else if (this.loveIt === 2) {
      return 'green';
    } else {
      return 'red';
    }
  }
}
