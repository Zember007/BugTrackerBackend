import type { Core } from '@strapi/strapi';

export default ({ strapi }: { strapi: Core.Strapi }) => ({
  async find() {
    return await strapi.entityService.findOne('api::contact-info.contact-info', 1, {
      populate: '*',
    });
  },

  async update(data: any) {
    return await strapi.entityService.update('api::contact-info.contact-info', 1, {
      data,
      populate: '*',
    });
  },

  async delete() {
    return await strapi.entityService.delete('api::contact-info.contact-info', 1);
  },
}); 