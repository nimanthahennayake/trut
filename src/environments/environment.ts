export const environment = {
  siteUrl: 'http://localhost:4200',
  apiClients: {
    armorlock_client: 'http://localhost:3000'
  },
  outputStatus:
  {
      success: 'success',
      error: 'error',
      actions: {
          next: 'next',
      }
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
