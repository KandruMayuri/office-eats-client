import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-restaurant-menu',
  templateUrl: './restaurant-menu.component.html',
  styleUrls: ['./restaurant-menu.component.scss']
})
export class RestaurantMenuComponent implements OnInit {

  title: string;
  closeBtnName: string;
  list: any[] = [];

  constructor(public bsModalRef: BsModalRef,
  public bsModalService: BsModalService) {}

  ngOnInit() {

  }

  selectItem (restaurantMenuId: number) {
    this.bsModalRef.hide();
    this.bsModalService.setDismissReason(restaurantMenuId.toString());
  }

}
