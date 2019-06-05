import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { RouterModule, Routes } from "@angular/router";

import { OrderComponent } from "./order.component";
import { Order0itemsComponent } from "./order0items/order0items.component";
import { DeliveryCostComponent } from "./delivery-cost/delivery-cost.component";
import { LeaveOrderGuard } from "./leave-order.guard";

const ROUTES: Routes = [
  { path: "", component: OrderComponent, canDeactivate: [LeaveOrderGuard] }
];

@NgModule({
  declarations: [OrderComponent, Order0itemsComponent, DeliveryCostComponent],
  imports: [SharedModule, RouterModule.forChild(ROUTES)]
})
export class OrderModule {}
