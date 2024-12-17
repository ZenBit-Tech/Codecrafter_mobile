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
  route_createdAt: Date;
  route_updatedAt: Date;
  route_deletedAt: Date | null;
  route_userIdId: number;
  route_companyIdId: number;
  user_id: number;
  user_full_name: string;
  user_email: string;
  user_role: string;
  user_phone_number: string;
  user_otp: string;
  user_otpExpiry: Date;
  user_createdAt: Date;
  user_updatedAt: Date;
  user_companyIdId: number;
  company_id: number;
  company_name: string;
  company_client_name: string;
  company_logo: string;
  company_email: string;
  company_createdAt: Date;
  company_updatedAt: string;
  ordersCount: string;
}
