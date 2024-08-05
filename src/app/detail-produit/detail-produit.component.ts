import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail-produit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail-produit.component.html',
  styleUrls: ['./detail-produit.component.css']
})
export class DetailProduitComponent {
  @Input() produit: any;

  // Method to close the modal
  closeModal() {
    this.produit = null; // This will hide the modal
  }
}
