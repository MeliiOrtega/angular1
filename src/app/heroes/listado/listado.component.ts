import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  heroes:string[] = ['superma', 'correcamino','flash'];
  h:string;

  borrar(){
    //this.heroes.splice(1,1);
    let a = this.heroes.shift()|| "";
    this.h = a;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
