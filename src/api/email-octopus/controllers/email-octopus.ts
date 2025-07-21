import type { Core } from '@strapi/strapi';

export default {
  async testConnection(ctx) {
    try {
      const service = strapi.service('api::email-octopus.email-octopus');
      ctx.body = await service.testConnection();
    } catch (error) {
      ctx.throw(500, error);
    }
  },

  async listInfo(ctx) {
    try {
      const service = strapi.service('api::email-octopus.email-octopus');
      ctx.body = await service.getListInfo();
    } catch (error) {
      ctx.throw(500, error);
    }
  },
  
  async subscribedContacts(ctx) {
    try {
      const service = strapi.service('api::email-octopus.email-octopus');
      const limit = ctx.query.limit ? parseInt(ctx.query.limit, 10) : 50;
      ctx.body = await service.getSubscribedContacts(limit);
    } catch (error) {
      ctx.throw(500, error);
    }
  },
}; 