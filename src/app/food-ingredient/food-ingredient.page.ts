import { Component, OnInit } from '@angular/core';
import { FoodIngredients } from './food-ingredient.model';

@Component({
  selector: 'app-food-ingredient',
  templateUrl: './food-ingredient.page.html',
  styleUrls: ['./food-ingredient.page.scss'],
})
export class FoodIngredientPage implements OnInit {

recipes: FoodIngredients[] = [
  {
    id: 1,
    name: 'Burger',
    imageUrl: './assets/burger.jpg',
    ingredients: ['Bread', 'Meat', 'Cheese', 'Onion'],
  },
  {
    id: 2,
    name: 'Indomie',
    imageUrl: './assets/indomie.jpg',
    ingredients: ['Indomie', 'Egg', 'Pepper'],
  },
  {
    id: 3,
    name: 'Jollof rice',
    imageUrl: './assets/jollof.jpg',
    ingredients: ['Rice', 'Tomatoes', 'Pepper', 'Chicken'],
  }
];

  constructor() { }

  ngOnInit() {
  }

}
