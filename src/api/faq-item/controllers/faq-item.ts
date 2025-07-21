import type { Core } from '@strapi/strapi';

export default ({ strapi }: { strapi: Core.Strapi }) => ({
  async find(ctx) {
    const { query } = ctx;
    
    const data = await strapi.entityService.findMany('api::faq-item.faq-item', {
      ...query,
      populate: '*',
    });

    return { data };
  },

  async findOne(ctx) {
    const { id } = ctx.params;
    
    const data = await strapi.entityService.findOne('api::faq-item.faq-item', id, {
      populate: '*',
    });

    return { data };
  },

  async create(ctx) {
    const data = await strapi.entityService.create('api::faq-item.faq-item', {
      data: ctx.request.body.data,
      populate: '*',
    });

    return { data };
  },

  async update(ctx) {
    const { id } = ctx.params;
    
    const data = await strapi.entityService.update('api::faq-item.faq-item', id, {
      data: ctx.request.body.data,
      populate: '*',
    });

    return { data };
  },

  async delete(ctx) {
    const { id } = ctx.params;
    
    const data = await strapi.entityService.delete('api::faq-item.faq-item', id);

    return { data };
  },
}); 