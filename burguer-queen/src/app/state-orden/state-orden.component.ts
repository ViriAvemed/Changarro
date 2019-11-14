import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogStatusOrdenComponent } from '../dialog-status-orden/dialog-status-orden.component';
import {OrdersService} from '../shared/orders.service';
import { MenuComponent } from '../menu/menu.component';


export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  totalOrder: number;
  mesa: number;
  order: any;
}


@Component({
  selector: 'app-state-orden',
  templateUrl: './state-orden.component.html',
  styleUrls: ['./state-orden.component.css']
})

export class StateOrdenComponent {
  private order: any;
  constructor(public dialog: MatDialog, public orderService: OrdersService) {
    // tslint:disable-next-line:no-unused-expression
    console.log(this.orderService.orders) ;
  }
  openDialog() {
    this.dialog.open(DialogStatusOrdenComponent);
  }

  // ngOnInit(): void {
  //   this.getMesa(this.order.completed);
  // }

}
