import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-product-card',
  imports: [DecimalPipe],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
  standalone: true
})
export class ProductCardComponent {
  @Input() product!: Product;
  isModalOpen = false;

  currentLink = "";

  currentImageIndex = 0;

  openModal(index: number){
    this.currentImageIndex = index;
    this.isModalOpen = true;
  }

  closeModal(){
    this.isModalOpen = false;
  }

  nextImage(){
    if(this.currentImageIndex < this.product.images.length - 1){
      this.currentImageIndex++;
    }
  }

  prevImage(){
    if(this.currentImageIndex > 0){
      this.currentImageIndex--;
    }
  }

  makeLink(){
    this.currentLink = "https://wa.me/?text=Check out this product: "+this.product.link;
  }

}
