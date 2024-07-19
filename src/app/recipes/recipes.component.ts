import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {


  recipes: any = []
  searchData: any = ""
  selectedCategory:string="All"

  constructor(private services: ApiService) { }

  ngOnInit(): void {
    // async method
    this.services.getAllRecipes().subscribe((data: any) => {

      this.recipes = data.recipes
      console.log(this.recipes);


    })
  }
  filteredRecipes() {
    return this.recipes.filter((recipe:any) => {
      
      const matchesCategory = this.selectedCategory === 'All' || recipe.mealType.includes(this.selectedCategory);
      return  matchesCategory;
    });
  }
  selectCategory(cat:string){
    this.selectedCategory=cat
  }
}
