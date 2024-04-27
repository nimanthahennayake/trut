import { BarHorizontal2DComponent } from "@swimlane/ngx-charts";

export const environment = {
  production: false,
  siteUrl: 'http://localhost:4200',
  apiClients: {
    armorlock_client: 'http://localhost:3000'
  },
  outputStatus: {
    success: 'success',
    error: 'error'
  },
  notificationConfigs: {
    duration: 5000,
    horizontal_position: 'center',
    vertical_position: 'top'
  },
  userSessionTimeOut: 1800,
  accessFunctionCodes: {
    public: 'security_0000',
    pages: 'security_0001'
  }
};
