import { Component, OnInit } from '@angular/core';
import Ingredient from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Pear', 15),
    new Ingredient('Banana', 1)
  ];
  constructor() {}

  ngOnInit() {}
}
