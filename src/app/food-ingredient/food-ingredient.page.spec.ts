import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodIngredientPage } from './food-ingredient.page';

describe('FoodIngredientPage', () => {
  let component: FoodIngredientPage;
  let fixture: ComponentFixture<FoodIngredientPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodIngredientPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodIngredientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
