import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Manager, ManagerDetails } from '../manager/models/manager';
import { GetRestaurantsResponse } from '../manager/models/restaurant';
import { baseURL, baseURLNew } from '../shared/constants/base-url';
import { UserService } from '../shared/services/user.service';

@Injectable()
export class ManagerService {

  private managerDetails: ManagerDetails;

  constructor(private httpClient: HttpClient,
    private userService: UserService) {
  }

  private getManagerDetailsUrl = baseURL + 'Users/detail/';
  private getManagerCorporateResturantsUrl = baseURLNew + 'Corporates/restaurantview/';
  private getRestaurantMenuUrl = baseURLNew + 'restaurants/menu/list/';

  set manager(manager: ManagerDetails) {
    this.managerDetails = manager;
  }

  get manager() {
    return this.managerDetails;
  }

  getManagerDetails() {
    return this.httpClient
      .get <Manager>(
        this.getManagerDetailsUrl + this.userService.getToken().id
      )
      .map(res => {
        return res;
      }).catch(error => this.handleError(error));
  }

  getManagerCorporateResturants() {
    return this.httpClient
      .post <GetRestaurantsResponse>(
        this.getManagerCorporateResturantsUrl + this.manager.corporate_id,
        {}
      )
      .map(res => {
        return res;
      }).catch(error => this.handleError(error));
  }

  getRestaurantMenu(restaurantId: number) {
    return this.httpClient
      .post <GetRestaurantsResponse>(
        this.getRestaurantMenuUrl + restaurantId,
        {}
      )
      .map(res => {
        return res;
      }).catch(error => this.handleError(error));
  }

  public handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    return Observable.throw(errMsg);
  }
}
