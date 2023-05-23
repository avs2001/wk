export const OUserType = {
  SuperAdmin: 1,
  SystemAdmin: 2,
  CustomerSupport: 3,
  TenantAdmin: 4,
  Physician: 5,
  Patient: 6
} as const;

export type UserType = typeof OUserType[keyof typeof OUserType];
