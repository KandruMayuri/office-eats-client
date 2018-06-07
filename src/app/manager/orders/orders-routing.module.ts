import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersComponent } from './orders.component';

const routes: Routes = [
  {
    path: '', component: OrdersComponent,
    children: [
      {
        path: '', redirectTo: 'restaurants', pathMatch: 'full'
      },
      {
        path: 'restaurants/:id', loadChildren: './restaurants/restaurants.module#RestaurantsModule'
      },
      {
        path: 'restaurant/:id', loadChildren: './restaurants/view-restaurant/view-restaurant.module#ViewRestaurantModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
