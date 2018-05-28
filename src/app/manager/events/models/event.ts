import { CommonResponse } from '../../../shared/models/user';

export class Event {
    eventId: number;
    managerId: number;
    managerEmail: string;
    eventDate: Date;
    eventTime: string;
    eventVenueLocation: string;
    eventOrderType: boolean;
    eventBudget: number;
    eventSplitEven: string;
    eventUsers: string;
    eventUsersCount: number;
    restaurantMenuId: number;
}

export class EventListResponse {
    obj_response: CommonResponse;
    result: Event[];
}

