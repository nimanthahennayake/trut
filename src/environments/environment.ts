export const environment = {
  production: false,
  siteUrl: 'http://localhost:4200',
  apiClients: {
    armorlock_client: 'http://localhost:3000'
  },
  outputStatus: {
    success: 'success',
    error: 'error',
    actions: {
      next: 'next',
    },
    variant: {
      secondary: 'secondary',
      informative: 'informative',
      negative: 'negative',
      positive: 'positive',
      notice: 'notice'
    }
  },
  notificationConfigs: {
    duration: 5000,
    horizontal_position: 'center',
    vertical_position: 'top'
  },
  userSessionTimeOut: 1800,
  storageItems: {
    successful_signin: 'ssfsgi',
    token_armorlock_client: 'tknalc',
    singed_time: 'sgdtme',
    singed_user_id: 'sgusid'
  },
  bcryptSalt: 10,
  accessFunctionCodes: {
    public: 'security_0000',
    pages: 'security_0001'
  },
  defaultPaths: {
    home: '/pages',
    auth: '/auth/sign-in',
    access_denied: '/error/access-denied',
    not_found: '/error/not-found',
    internal_server_error: '/error/internal-server-error',
    reset_password: '/auth/password-reset'
  }
};
