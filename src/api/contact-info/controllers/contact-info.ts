import type { Core } from '@strapi/strapi';

export default ({ strapi }: { strapi: Core.Strapi }) => ({
  async find(ctx) {
    const data = await strapi.entityService.findOne('api::contact-info.contact-info', 1, {
      populate: '*',
    });

    return { data };
  },

  async update(ctx) {
    const data = await strapi.entityService.update('api::contact-info.contact-info', 1, {
      data: ctx.request.body.data,
      populate: '*',
    });

    return { data };
  },

  async delete(ctx) {
    const data = await strapi.entityService.delete('api::contact-info.contact-info', 1);

    return { data };
  },
}); 