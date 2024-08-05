import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProduitComponent } from './produit/produit.component';
import { DetailProduitComponent } from './detail-produit/detail-produit.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProduitComponent, DetailProduitComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projet-produits';
  selectedProduit: any = null;

  onProduitSelected(produit: any) {
    this.selectedProduit = produit;
  }
}
