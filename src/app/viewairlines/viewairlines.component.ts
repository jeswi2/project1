import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewairlines',
  templateUrl: './viewairlines.component.html',
  styleUrls: ['./viewairlines.component.css']
})
export class ViewairlinesComponent implements OnInit {

  constructor(private myapi:ApiService) { 
    this.fetchData()
   }

  fetchData=()=>{
    this.myapi.viewairlineData().subscribe(
      (data)=>{
        this.viewairlineData=data
      }
    )
  }

  viewairlineData:any=[]
  

  ngOnInit(): void {
  }

}
