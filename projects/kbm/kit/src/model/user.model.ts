export interface BaseUser {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  phone: string;
  isActive: boolean;
  lastLoginTime: number;
  isPendingActivation: boolean;
  isLocked: boolean;
  userType: number;
  createdAt: number;
}

export interface UserInfo extends BaseUser {
}

export interface Hcp extends BaseUser {
  address: string;
  address1: string;
  city: string;
  state: string;
  postalCode: string;
  countryCode: string;
  practice: string;
  speciality: string;
}

export interface Patient extends BaseUser {
  patientId: string;
  address: string;
  address1: string;
  city: string;
  state: string;
  postalCode: string;
  birthdate: string;
  countryCode: string;
  gender: string;
}
