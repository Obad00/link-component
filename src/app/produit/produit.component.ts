import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent {
  produits = [
    { id: 1, titre: 'Produit 1', prix: 19.99, imageUrl: 'https://img.freepik.com/premium-photo/gift-box-shopping-bag-equipment-vector_959624-77602.jpg?w=1060' },
    { id: 2, titre: 'Produit 2', prix: 29.99, imageUrl: 'https://img.freepik.com/premium-photo/gadgets-accessories-isolated-white-background_1272184-12.jpg?w=740' },
    { id: 3, titre: 'Produit 3', prix: 39.99, imageUrl: 'https://img.freepik.com/free-photo/modern-stationary-collection-arrangement_23-2149309649.jpg?t=st=1722887596~exp=1722891196~hmac=7886b1cdbf60f0922b891b388b050c66f098c19c189bccbf8febb756072f75f6&w=996' }
  ];

  @Output() produitSelected = new EventEmitter<any>();

  voirDetails(produit: any) {
    this.produitSelected.emit(produit);
  }

  produit: any; // Define the type based on your data model

  // Method to open the modal (for example, triggered by a button)
  openModal(produit: any) {
    this.produit = produit;
  }

  // Method to close the modal
  closeModal() {
    this.produit = null;
  }
}
