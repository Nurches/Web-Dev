import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item-component',
  imports: [DecimalPipe],
  templateUrl: './product-item-component.html',
  styleUrl: './product-item-component.css',
  standalone: true,
})
export class ProductItemComponent {
  @Input() product!: Product;

  @Output() delete = new EventEmitter<number>();

  isModalOpen = false;
  currentImageIndex = 0;

  openModal(index: number) {
    this.currentImageIndex = index;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  nextImage() {
    if (this.currentImageIndex < this.product.images.length - 1) {
      this.currentImageIndex++;
    }
  }

  prevImage() {
    if (this.currentImageIndex > 0) {
      this.currentImageIndex--;
    }
  }

  like() {
    this.product.likes++;
  }

  deleteProduct() {
    this.delete.emit(this.product.id);
  }

  get whatsappShareLink(): string {
    return 'https://wa.me/?text=Check out this product: ' + encodeURIComponent(this.product.link);
  }

  get telegramShareLink(): string {
    return 'https://t.me/share/url?url=' + encodeURIComponent(this.product.link);
  }
}
