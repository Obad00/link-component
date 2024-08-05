import { Routes } from '@angular/router';
import { ProduitComponent } from './produit/produit.component';
import { DetailProduitComponent } from './detail-produit/detail-produit.component';

export const routes: Routes = [
  { path: '', component: ProduitComponent },
  { path: 'detail', component: DetailProduitComponent }
];
