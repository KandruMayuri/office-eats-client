import { CommonResponse } from '../../shared/models/user';

export class Restaurant {
    restaurantId: number;
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
