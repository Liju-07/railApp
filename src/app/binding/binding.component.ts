import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  constructor() { }


 status:boolean=false


name="Jemel"

read=()=>{
  this.name="Salby"
  this.status=true
}
  ngOnInit(): void {
  }

}
