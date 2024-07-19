import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent {

  singleRecipe:any=[]

    constructor(private ar:ActivatedRoute,private service:ApiService){}

    ngOnInit():void{
      // asyc 
      this.ar.params.subscribe((data:any)=>{
        console.log(data.id);
        this.service.getAllRecipes().subscribe((result:any)=>{
          this.singleRecipe=result.recipes.find((i:any)=>i.id==data.id)
          console.log(this.singleRecipe);
          
        })
      })
    }
}
