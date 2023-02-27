import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

import { SharedModule } from '@shared';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { OrderCoffeeComponent } from './order-coffee/order-coffee.component';

@NgModule({
  imports: [CommonModule, TranslateModule, SharedModule, IonicModule, HomeRoutingModule],
  declarations: [HomeComponent, OrderCoffeeComponent],
})
export class HomeModule {}
