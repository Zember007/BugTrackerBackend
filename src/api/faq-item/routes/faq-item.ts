export default {
  routes: [
    {
      method: 'GET',
      path: '/faq-items',
      handler: 'faq-item.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/faq-items/:id',
      handler: 'faq-item.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/faq-items',
      handler: 'faq-item.create',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'PUT',
      path: '/faq-items/:id',
      handler: 'faq-item.update',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'DELETE',
      path: '/faq-items/:id',
      handler: 'faq-item.delete',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
}; 