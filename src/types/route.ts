import { StatusEnum } from '@/constants/status';

export interface Address {
  id: number;
  lat: number;
  lng: number;
  address: string;
  time: string;
  status: StatusEnum;
}
