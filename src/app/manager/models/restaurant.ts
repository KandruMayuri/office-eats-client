import { CommonResponse } from '../../shared/models/user';

export class Restaurant {
    restaurantId: number;
    restaurantName: string;
    restaurantEmail: string;
    restaurantPhone1: number;
    restaurantTextPhoneNumber: number;
    restaurantCountry: string;
    restaurantState: string;
    restaurantCity: string;
    restaurantStreet1: string;
    restaurantStreet2: string;
    restaurantZipCode: number;
    restaurantOpenDays: string;
    restaurantOpenTime: string;
    restaurantCloseTime: string;
    restaurantLogo: string;
    checked: boolean;
}

export class GetRestaurantsResponse {
    obj_response: CommonResponse;
    result: Restaurant[];
}

export class RestaurantMenu {
    restaurantMenuTypeId: number;
    restaurantMenuTypeName: string;
    restaurantMenuName: string;
    restaurantMenuPrice: number;
    restaurantMenuDescription: string;
    restaurantMenuOrderType: number;
}

export class GetRestaurantMenusResponse {
    obj_response: CommonResponse;
    result: RestaurantMenu [];
}

export class GetEventRestaurants  {
  obj_response: CommonResponse;
  result: Result;
}

export class Result {
  eventBudget: number;
  eventId: number;
  Restaurant: Restaurant[];
}
