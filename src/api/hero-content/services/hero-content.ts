import type { Core } from '@strapi/strapi';

export default ({ strapi }: { strapi: Core.Strapi }) => ({
  async find() {
    return await strapi.entityService.findOne('api::hero-content.hero-content', 1, {
      populate: '*',
    });
  },

  async update(data: any) {
    return await strapi.entityService.update('api::hero-content.hero-content', 1, {
      data,
      populate: '*',
    });
  },

  async delete() {
    return await strapi.entityService.delete('api::hero-content.hero-content', 1);
  },
}); 