import type { Core } from '@strapi/strapi';

export default ({ strapi }: { strapi: Core.Strapi }) => ({
  async find() {
    return await strapi.entityService.findOne('api::metric.metric', 1, {
      populate: '*',
    });
  },

  async update(data: any) {
    return await strapi.entityService.update('api::metric.metric', 1, {
      data,
      populate: '*',
    });
  },

  async delete() {
    return await strapi.entityService.delete('api::metric.metric', 1);
  },
}); 