import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellerDashboardComponent } from './seller/seller-dashboard/seller-dashboard.component';
import { SigninSignupComponent } from './seller/signin-signup/signin-signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SellerDashboardComponent, SigninSignupComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterModule],
})
export class CustomerModule {}
