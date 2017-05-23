import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

    private recipes: Recipe[] = [
        new Recipe(
            'Lemon Cakes', 
            'The best sweet treats in Westeros!', 
            'http://2.bp.blogspot.com/-_mG8Ysh1hk4/VVgu8hmQ38I/AAAAAAAABB4/ZovWKqKURmc/s1600/dsc_0506.jpg',
            [
                new Ingredient('Lemons', 6),
                new Ingredient('Flour', 2.5)
            ]),
        new Recipe(
            'Big Belly Burger', 
            'They have these all over the multiverse!', 
            'http://nerdist.com/wp-content/uploads/2016/01/Flash-Big-Belly-Burger-01182016.jpg',
            [
                new Ingredient('Pattie', 2),
                new Ingredient('Cheese', 1),
                new Ingredient('Buns', 6),
                new Ingredient('French Fries', 30)
            ]),
        new Recipe(
            'Sweet Rolls', 
            'They are always on a side table at a party.', 
            'http://3.bp.blogspot.com/-IH0nVNC1NK4/U1hcK8vIWkI/AAAAAAAAArQ/J8LcLYYBklA/s1600/2uhra5i.jpg',
            [
                new Ingredient('Sweet Dough', 4),
                new Ingredient('Icing', 3)
            ]),
        new Recipe(
            'Cake', 
            'Delicious and moist, this is not a lie!', 
            'http://3.bp.blogspot.com/_cd6_MFUGTUE/TI-qhkYbt0I/AAAAAAAAAV8/wJHhnJVi8Lo/s1600/the_cake_is_a_lie_portal.jpg',
            [
                new Ingredient('Flour', 4),
                new Ingredient('Sugar', 2),
                new Ingredient('Cocoa Powder', 5)
            ])
    ];

    constructor(private slService: ShoppingListService) {

    }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}