export default {
  routes: [
    {
      method: 'GET',
      path: '/metric',
      handler: 'metric.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'PUT',
      path: '/metric',
      handler: 'metric.update',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'DELETE',
      path: '/metric',
      handler: 'metric.delete',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
}; 