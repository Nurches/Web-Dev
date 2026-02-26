import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { Category } from '../../models/category.model';
import { ProductListComponent } from '../../components/product-list-component/product-list-component';

@Component({
  selector: 'app-product-component',
  imports: [ProductListComponent],
  templateUrl: './product-component.html',
  styleUrl: './product-component.css',
  standalone: true,
})
export class ProductComponent {
  categories: Category[] = [
    {
      id: 1,
      name: 'Phones',
    },
    {
      id: 2,
      name: 'Бытовая техника',
    },
    {
      id: 3,
      name: 'Компьютеры',
    },
    {
      id: 4,
      name: 'ТВ, АУДИО, ВИДЕО',
    },
    {
      id: 5,
      name: 'Одежда',
    },
  ];

  isProductList = false;

  chosenCat = -1;

  classDiv = 'global';

  showProductList(chosen: number) {
    this.isProductList = true;
    this.chosenCat = chosen;
  }

  hideProductList() {
    this.isProductList = false;
    this.chosenCat = -1;
  }
}
