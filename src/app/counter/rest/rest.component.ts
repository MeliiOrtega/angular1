import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.css']
})
export class RestComponent implements OnInit {
  @Input() ib:number;

  @Output() d = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  restar(){
    this.ib--;
    this.d.emit(this.ib);

  }

}
