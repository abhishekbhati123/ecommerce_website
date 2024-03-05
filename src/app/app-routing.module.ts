import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { UserProfileComponent } from './user-profile/my-profile.component';
import { SellerDashboardComponent } from './customer/seller/seller-dashboard/seller-dashboard.component';
import { ProductComponent } from './product-crud/product/product.component';

const routes: Routes = [
  { path: '', redirectTo: '', component: HomeComponent, pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'my-profile', component: UserProfileComponent },

  //after login to seller
  {
    path: '',
    children: [
      {
        path: 'seller-dashboard',
        component: SellerDashboardComponent,
      },
      {
        path: 'product',
        component: ProductComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
