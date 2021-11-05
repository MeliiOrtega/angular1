import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent{
  @Input() ic:number;

  @Output() v = new EventEmitter<number>();


  add(){
    this.ic++;
    this.v.emit(this.ic);
  }




}
