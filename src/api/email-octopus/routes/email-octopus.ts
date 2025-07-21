export default {
  routes: [
    {
      method: 'GET',
      path: '/email-octopus/test-connection',
      handler: 'email-octopus.testConnection',
      config: {
        policies: [],
        middlewares: [],
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/email-octopus/list-info',
      handler: 'email-octopus.listInfo',
      config: {
        policies: [],
        middlewares: [],
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/email-octopus/subscribed-contacts',
      handler: 'email-octopus.subscribedContacts',
      config: {
        policies: [],
        middlewares: [],
        auth: false,
      },
    },
  ],
}; 