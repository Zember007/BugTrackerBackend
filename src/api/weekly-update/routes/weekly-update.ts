export default {
  routes: [
    {
      method: 'GET',
      path: '/weekly-updates',
      handler: 'weekly-update.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/weekly-updates/:id',
      handler: 'weekly-update.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/weekly-updates',
      handler: 'weekly-update.create',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'PUT',
      path: '/weekly-updates/:id',
      handler: 'weekly-update.update',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'DELETE',
      path: '/weekly-updates/:id',
      handler: 'weekly-update.delete',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
}; 