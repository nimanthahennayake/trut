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
    horizontalPosition: 'center',
    verticalPosition: 'top'
  },
  userSessionTimeOut: 1800,
  storageItems: {
    successfulSignIn: 'ssfsgi',
    tokenArmorlockClient: 'tknalc',
    singedTime: 'sgdtme',
    singedUserId: 'sgusid'
  },
  bcryptSalt: 10,
  accessFunctionCodes: {
    public: 'security_0000',
    pages: 'security_0001'
  },
  defaultPaths: {
    home: '/pages',
    auth: '/auth/sign-in',
    accessDenied: '/error/access-denied',
    not_found: '/error/not-found',
    internal_server_error: '/error/internal-server-error',
    reset_password: '/auth/password-reset'
  },
  paginationSettings: {
    defaultPage: 1,
    defaultLimit: 10,
    pageSizeOptions: [10, 20, 50, 100]
  }
};
