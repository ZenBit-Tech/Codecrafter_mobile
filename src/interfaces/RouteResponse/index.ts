export interface RouteResponse {
  id: number;
  submission_date: string;
  arrival_date: string;
  distance: number;
  status: string;
  user_id: {
    id: number;
    logo: string;
    full_name: string;
    email: string;
    role: string;
    phone_number: string;
    company_id: {
      id: number;
      name: string;
      logo: string;
      email: string;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  };
  company_id: {
    id: number;
    name: string;
    logo: string;
    email: string;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
}
