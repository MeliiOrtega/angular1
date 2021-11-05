import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  title = 'contador';
  i:number=0;

  constructor() { }

  ngOnInit(): void {
  }

  cont(event:number){
    this.i = event;
  }

  rest(event:number){
    this.i = event;
  }

}
