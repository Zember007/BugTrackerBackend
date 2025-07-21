export default {
  routes: [
    {
      method: 'GET',
      path: '/hero-content',
      handler: 'hero-content.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'PUT',
      path: '/hero-content',
      handler: 'hero-content.update',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'DELETE',
      path: '/hero-content',
      handler: 'hero-content.delete',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
}; 