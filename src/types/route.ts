import { OrderStatuses, RouteStatuses } from '@/constants/status';

export interface Address {
  id: number;
  lat: number;
  lng: number;
  address: string;
  time: string;
  status: OrderStatuses;
  distance?: number;
}

export interface RouteInform {
  id: number;
  submission_date: Date;
  arrival_date: Date;
  distance: number;
  status: RouteStatuses;
  driver: {
    id: number;
    full_name: string;
    email: string;
  };
  orders: {
    id: number;
    collection_date: Date;
    collection_time_start: Date;
    collection_time_end: Date;
    collection_address: string;
    status: OrderStatuses;
  }[];
}

export interface Route {
  route_id: number;
  route_submission_date: Date;
  route_arrival_date: Date;
  route_distance: number;
  route_status: RouteStatuses;
}
