import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-train',
  templateUrl: './view-train.component.html',
  styleUrls: ['./view-train.component.css']
})
export class ViewTrainComponent implements OnInit {

  constructor(private api:ApiService) { 
    this.fetch()
  }

  status:boolean=false

  fetch=()=>{
    this.api.show().subscribe(
      (data)=>{this.Data=data}
    )
    this.status=true
  }





Data:any=[]

  ngOnInit(): void {
  }

}
