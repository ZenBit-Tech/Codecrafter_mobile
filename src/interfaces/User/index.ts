import { Company } from '@/interfaces/Company';

export interface User {
  id: number;
  logo: string;
  full_name: string;
  email: string;
  role: string;
  phone_number: string;
  company_id: Company;
  createdAt: string;
  updatedAt: string;
}
