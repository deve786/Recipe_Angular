import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(DataArray:any[],searchString:string): any {
    
    const result:any=[]
    if(!DataArray || !searchString){
      return DataArray
    }else{
      DataArray.forEach((item:any)=>{
        if(item.name.trim().toLowerCase().includes(searchString.trim().toLowerCase())){
          
          return result.push(item)
        }
      })
    }
    return result
    
  }

}
