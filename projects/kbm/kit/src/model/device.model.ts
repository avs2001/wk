export interface Device {
  id: number;
  datasourceId: number;
  name: string;
  serialNumber: string;
  softwareVersion: string;
  state: number;
  createdAt: number;
  updatedAt: number;
}

export interface DeviceUsage {
  organizationId: number;
  startDate: number;
  endDate: number;
  device: Device;
}
