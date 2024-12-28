export enum StatusEnum {
  COMPLETED = 'completed',
  FAILED = 'failed',
  AT_RISK = 'atRisk',
  UPCOMING = 'upcoming',
}

export enum RouteStatuses {
  UPCOMING = 'Upcoming',
  AT_RISK = 'At Risk',
  ON_TIME = 'On Time',
  FAILED = 'Failed',
}

export enum OrderStatuses {
  COMPLETED = 'Completed',
  FAILED = 'Failed',
  NOT_ARRIVED = 'Not arrived',
  AT_RISK = 'At Risk',
  UPCOMING = 'Upcoming',
  CUSTOMER_INFORMED = 'Customer Informed',
  TRANSPORTER_LOCKED = 'Transporter Locked',
  IDENTITY_VERIFIED = 'Identity Verified',
  BOARDING_PASS_VERIFIED = 'Boarding pass verified',
  BAGGAGE_CONFIRMED = 'Baggage confirmed',
  CUSTOMER_CONFIRMED = 'Customer confirmed',
  BAGGAGE_RECORDED = 'Baggage recorded',
  BAGGAGE_COVERED = 'Baggage covered',
  LOADED_INTO_VEHICLE = 'Loaded into vehicle',
}
